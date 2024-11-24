import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageProps,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import CustomIcon from './CustomIcon';
import {CoffeeData} from '../types';
import {useStore} from '../store/useStore';

const CartItem = ({
  id,
  name,
  imagelink_square,
  special_ingredient,
  roasted,
  prices,
  type,
}: CoffeeData) => {
  const incrementCartItemQuantity = useStore(
    store => store.incrementCartItemQuantity,
  );
  const decrementCartItemQuantity = useStore(
    store => store.decrementCartItemQuantity,
  );
  const calculateCartPrice = useStore(store => store.calculateCartPrice);

  const onIncrementItem = (priceId: string, size: string) => {
    incrementCartItemQuantity(priceId, size);
    calculateCartPrice();
  };

  const onDecrementItem = (priceId: string, size: string) => {
    decrementCartItemQuantity(priceId, size);
    calculateCartPrice();
  };

  return (
    <View>
      {prices.length > 1 ? (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
          style={styles.linearGradient}>
          <View style={styles.cartRow}>
            <Image
              source={imagelink_square as ImageProps}
              style={styles.cartImage}
            />
            <View style={styles.infoContainer}>
              <View>
                <Text style={styles.itemTitle}>{name}</Text>
                <Text style={styles.itemSubtitle}>{special_ingredient}</Text>
              </View>
              <View style={styles.roastedContainer}>
                <Text style={styles.roastedText}>{roasted}</Text>
              </View>
            </View>
          </View>
          {prices.map((data: any, index: any) => (
            <View key={index.toString()} style={styles.itemRowContainer}>
              <View style={styles.sizeContainer}>
                <View style={styles.sizeBox}>
                  <Text
                    style={[
                      styles.sizeText,
                      {
                        fontSize:
                          type === 'Bean' ? FONTSIZE.size_12 : FONTSIZE.size_16,
                      },
                    ]}>
                    {data.size}
                  </Text>
                </View>
                <Text style={styles.sizeCurrency}>
                  {data.currency}
                  <Text style={styles.sizePrice}> {data.price}</Text>
                </Text>
              </View>
              <View style={styles.sizeContainer}>
                <TouchableOpacity
                  style={styles.iconButton}
                  onPress={() => {
                    onDecrementItem(id, data.size);
                  }}>
                  <CustomIcon
                    name="minus"
                    color={COLORS.primaryWhiteHex}
                    size={FONTSIZE.size_10}
                  />
                </TouchableOpacity>
                <View style={styles.quantityContainer}>
                  <Text style={styles.quantityText}>{data.quantity}</Text>
                </View>
                <TouchableOpacity
                  style={styles.iconButton}
                  onPress={() => {
                    onIncrementItem(id, data.size);
                  }}>
                  <CustomIcon
                    name="add"
                    color={COLORS.primaryWhiteHex}
                    size={FONTSIZE.size_10}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </LinearGradient>
      ) : (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
          style={styles.CartItemSingleLinearGradient}>
          <View>
            <Image
              source={imagelink_square as ImageProps}
              style={styles.CartItemSingleImage}
            />
          </View>
          <View style={styles.CartItemSingleInfoContainer}>
            <View>
              <Text style={styles.itemTitle}>{name}</Text>
              <Text style={styles.itemSubtitle}>{special_ingredient}</Text>
            </View>
            <View style={styles.CartItemSingleSizeValueContainer}>
              <View style={styles.sizeBox}>
                <Text
                  style={[
                    styles.sizeText,
                    {
                      fontSize:
                        type === 'Bean' ? FONTSIZE.size_12 : FONTSIZE.size_16,
                    },
                  ]}>
                  {prices[0].size}
                </Text>
              </View>
              <Text style={styles.sizeCurrency}>
                {prices[0].currency}
                <Text style={styles.sizePrice}> {prices[0].price}</Text>
              </Text>
            </View>
            <View style={styles.CartItemSingleQuantityContainer}>
              <TouchableOpacity
                style={styles.iconButton}
                onPress={() => {
                  onDecrementItem(id, prices[0].size);
                }}>
                <CustomIcon
                  name="minus"
                  color={COLORS.primaryWhiteHex}
                  size={FONTSIZE.size_10}
                />
              </TouchableOpacity>
              <View style={styles.quantityContainer}>
                <Text style={styles.quantityText}>{prices[0].quantity}</Text>
              </View>
              <TouchableOpacity
                style={styles.iconButton}
                onPress={() => {
                  onIncrementItem(id, prices[0].size);
                }}>
                <CustomIcon
                  name="add"
                  color={COLORS.primaryWhiteHex}
                  size={FONTSIZE.size_10}
                />
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    gap: SPACING.space_12,
    padding: SPACING.space_12,
    borderRadius: BORDERRADIUS.radius_25,
  },
  cartRow: {
    flexDirection: 'row',
    gap: SPACING.space_12,
    flex: 1,
  },
  cartImage: {
    height: 130,
    width: 130,
    borderRadius: BORDERRADIUS.radius_20,
  },
  infoContainer: {
    flex: 1,
    paddingVertical: SPACING.space_4,
    justifyContent: 'space-between',
  },
  itemTitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
  itemSubtitle: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
    color: COLORS.secondaryLightGreyHex,
  },
  roastedContainer: {
    height: 50,
    width: 50 * 2 + SPACING.space_20,
    borderRadius: BORDERRADIUS.radius_15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryDarkGreyHex,
  },
  roastedText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_10,
    color: COLORS.primaryWhiteHex,
  },
  itemRowContainer: {
    flex: 1,
    alignItems: 'center',
    gap: SPACING.space_20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  sizeContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sizeBox: {
    backgroundColor: COLORS.primaryBlackHex,
    height: 40,
    width: 100,
    borderRadius: BORDERRADIUS.radius_10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sizeText: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.secondaryLightGreyHex,
  },
  sizeCurrency: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryOrangeHex,
  },
  sizePrice: {
    color: COLORS.primaryWhiteHex,
  },
  iconButton: {
    backgroundColor: COLORS.primaryOrangeHex,
    padding: SPACING.space_12,
    borderRadius: BORDERRADIUS.radius_10,
  },
  quantityContainer: {
    backgroundColor: COLORS.primaryBlackHex,
    width: 80,
    borderRadius: BORDERRADIUS.radius_10,
    borderWidth: 2,
    borderColor: COLORS.primaryOrangeHex,
    alignItems: 'center',
    paddingVertical: SPACING.space_4,
  },
  quantityText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
  },
  CartItemSingleLinearGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACING.space_12,
    gap: SPACING.space_12,
    borderRadius: BORDERRADIUS.radius_25,
  },
  CartItemSingleImage: {
    height: 150,
    width: 150,
    borderRadius: BORDERRADIUS.radius_20,
  },
  CartItemSingleInfoContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-around',
  },
  CartItemSingleSizeValueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  CartItemSingleQuantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default CartItem;
