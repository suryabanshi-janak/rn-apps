export interface CoffeeData {
  id: string;
  name: string;
  description: string;
  roasted: string;
  imagelink_square: string;
  imagelink_portrait: string;
  ingredients: string;
  special_ingredient: string;
  prices: {
    size: string;
    price: string;
    currency: string;
  }[];
  average_rating: number;
  ratings_count: string;
  favourite: boolean;
  type: string;
  index: number;
}

export interface Order {
  orderDate: string;
  cartItems: CoffeeData[];
  cartPrice: string;
}
