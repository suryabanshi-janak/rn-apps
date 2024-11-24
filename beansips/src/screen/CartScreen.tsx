import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import {COLORS, SPACING} from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import {useStore} from '../store/useStore';
import PaymentFooter from '../components/PaymentFooter';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import NoCartData from '../components/NoCartData';
import {TouchableOpacity} from 'react-native';
import CartItem from '../components/CartItem';

const CartScreen = () => {
  const cartItems = useStore(store => store.cartItems);
  const cartPrice = useStore(store => store.cartPrice);

  const tabBarHeight = useBottomTabBarHeight();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}>
        <View style={[styles.contentContainer, {paddingBottom: tabBarHeight}]}>
          <View style={styles.contentTopContainer}>
            <HeaderBar title="Cart" />

            {cartItems.length ? (
              <View style={styles.cartItemsContainer}>
                {cartItems.map(item => (
                  <TouchableOpacity key={item.id}>
                    <CartItem {...item} />
                  </TouchableOpacity>
                ))}
              </View>
            ) : (
              <NoCartData message="Cart is empty" />
            )}
          </View>

          {cartItems.length ? (
            <PaymentFooter
              buttonLabel="Pay"
              onButtonPress={() => {}}
              price={{price: cartPrice.toString(), currency: '$', size: ''}}
            />
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
};
export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  scrollView: {
    flexGrow: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  contentTopContainer: {
    flex: 1,
  },
  cartItemsContainer: {
    paddingHorizontal: SPACING.space_20,
    gap: SPACING.space_20,
  },
});
