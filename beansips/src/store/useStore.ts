import {create} from 'zustand';
import {produce} from 'immer';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {coffeeData} from '../data/coffee';
import {beansData} from '../data/beans';
import {CoffeeData, Order} from '../types';

interface Store {
  coffee: CoffeeData[];
  beans: CoffeeData[];
  cartPrice: number;
  favorites: CoffeeData[];
  cartItems: any[];
  orderHistories: Order[];
  addToCart: (cartItem: Partial<CoffeeData>) => void;
  calculateCartPrice: () => void;
  addToOrderHistoryFromCart: () => void;
  addToFavorite: (id: string, size: string) => void;
  deleteFromFavorite: (id: string, size: string) => void;
  incrementCartItemQuantity: (id: string, size: string) => void;
  decrementCartItemQuantity: (id: string, size: string) => void;
}

export const useStore = create<Store>()(
  persist(
    set => ({
      coffee: coffeeData,
      beans: beansData,
      cartPrice: 0,
      favorites: [],
      cartItems: [],
      orderHistories: [],
      addToCart: (cartItem: any) =>
        set(
          produce((state: Store) => {
            let found = false;
            for (let i = 0; i < state.cartItems.length; i++) {
              if (state.cartItems[i].id === cartItem.id) {
                found = true;
                let size = false;
                for (let j = 0; j < state.cartItems[i].prices.length; j++) {
                  if (
                    state.cartItems[i].prices[j].size ===
                    cartItem.prices[0].size
                  ) {
                    size = true;
                    state.cartItems[i].prices[j].quantity++;
                    break;
                  }
                }
                if (size === false) {
                  state.cartItems[i].prices.push(cartItem.prices[0]);
                }
                state.cartItems[i].prices.sort((a: any, b: any) => {
                  if (a.size > b.size) {
                    return -1;
                  }
                  if (a.size < b.size) {
                    return 1;
                  }
                  return 0;
                });
                break;
              }
            }
            if (found === false) {
              state.cartItems.push(cartItem);
            }
          }),
        ),
      calculateCartPrice: () =>
        set(
          produce((state: Store) => {
            let totalprice = 0;
            for (let i = 0; i < state.cartItems.length; i++) {
              let tempprice = 0;
              for (let j = 0; j < state.cartItems[i].prices.length; j++) {
                tempprice =
                  tempprice +
                  parseFloat(state.cartItems[i].prices[j].price) *
                    state.cartItems[i].prices[j].quantity;
              }
              state.cartItems[i].ItemPrice = tempprice.toFixed(2).toString();
              totalprice = totalprice + tempprice;
            }
            state.cartPrice = +totalprice.toFixed(2);
          }),
        ),
      addToFavorite: (type: string, id: string) =>
        set(
          produce((state: Store) => {
            if (type === 'Coffee') {
              for (let i = 0; i < state.coffee.length; i++) {
                if (state.coffee[i].id === id) {
                  if (state.coffee[i].favourite === false) {
                    state.coffee[i].favourite = true;
                    state.favorites.unshift(state.coffee[i]);
                  } else {
                    state.coffee[i].favourite = false;
                  }
                  break;
                }
              }
            } else if (type === 'Bean') {
              for (let i = 0; i < state.beans.length; i++) {
                if (state.beans[i].id === id) {
                  if (state.beans[i].favourite === false) {
                    state.beans[i].favourite = true;
                    state.favorites.unshift(state.beans[i]);
                  } else {
                    state.beans[i].favourite = false;
                  }
                  break;
                }
              }
            }
          }),
        ),
      deleteFromFavorite: (type: string, id: string) =>
        set(
          produce((state: Store) => {
            if (type === 'Coffee') {
              for (let i = 0; i < state.coffee.length; i++) {
                if (state.coffee[i].id === id) {
                  if (state.coffee[i].favourite === true) {
                    state.coffee[i].favourite = false;
                  } else {
                    state.coffee[i].favourite = true;
                  }
                  break;
                }
              }
            } else if (type === 'Beans') {
              for (let i = 0; i < state.beans.length; i++) {
                if (state.beans[i].id === id) {
                  if (state.beans[i].favourite === true) {
                    state.beans[i].favourite = false;
                  } else {
                    state.beans[i].favourite = true;
                  }
                  break;
                }
              }
            }
            let spliceIndex = -1;
            for (let i = 0; i < state.favorites.length; i++) {
              if (state.favorites[i].id === id) {
                spliceIndex = i;
                break;
              }
            }
            state.favorites.splice(spliceIndex, 1);
          }),
        ),
      incrementCartItemQuantity: (id: string, size: string) =>
        set(
          produce((state: Store) => {
            for (let i = 0; i < state.cartItems.length; i++) {
              if (state.cartItems[i].id === id) {
                for (let j = 0; j < state.cartItems[i].prices.length; j++) {
                  if (state.cartItems[i].prices[j].size === size) {
                    state.cartItems[i].prices[j].quantity++;
                    break;
                  }
                }
              }
            }
          }),
        ),
      decrementCartItemQuantity: (id: string, size: string) =>
        set(
          produce((state: Store) => {
            for (let i = 0; i < state.cartItems.length; i++) {
              if (state.cartItems[i].id === id) {
                for (let j = 0; j < state.cartItems[i].prices.length; j++) {
                  if (state.cartItems[i].prices[j].size === size) {
                    if (state.cartItems[i].prices.length > 1) {
                      if (state.cartItems[i].prices[j].quantity > 1) {
                        state.cartItems[i].prices[j].quantity--;
                      } else {
                        state.cartItems[i].prices.splice(j, 1);
                      }
                    } else {
                      if (state.cartItems[i].prices[j].quantity > 1) {
                        state.cartItems[i].prices[j].quantity--;
                      } else {
                        state.cartItems.splice(i, 1);
                      }
                    }
                    break;
                  }
                }
              }
            }
          }),
        ),
      addToOrderHistoryFromCart: () =>
        set(
          produce((state: Store) => {
            let temp = state.cartItems.reduce(
              (accumulator: number, currentValue: any) =>
                accumulator + parseFloat(currentValue.ItemPrice),
              0,
            );
            if (state.orderHistories.length > 0) {
              state.orderHistories.unshift({
                orderDate:
                  new Date().toDateString() +
                  ' ' +
                  new Date().toLocaleTimeString(),
                cartItems: state.cartItems,
                cartPrice: temp.toFixed(2).toString(),
              });
            } else {
              state.orderHistories.push({
                orderDate:
                  new Date().toDateString() +
                  ' ' +
                  new Date().toLocaleTimeString(),
                cartItems: state.cartItems,
                cartPrice: temp.toFixed(2).toString(),
              });
            }
            state.cartItems = [];
          }),
        ),
    }),
    {
      name: 'coffee-app',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
