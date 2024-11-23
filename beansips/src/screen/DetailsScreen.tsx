import {useState} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useStore} from '../store/useStore';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import ImageBackgroundInfo from '../components/ImageBackgroundInfo';
import PaymentFooter from '../components/PaymentFooter';
import {CoffeePrice} from '../types';

const DetailsScreen = ({navigation, route}: any) => {
  const isCoffee = route.params.type === 'Coffee';

  const details = useStore(store => (isCoffee ? store.coffee : store.beans))[
    route.params.index
  ];
  const addToCart = useStore(store => store.addToCart);
  const calculateCartPrice = useStore(store => store.calculateCartPrice);
  const addToFavorite = useStore(store => store.addToFavorite);
  const deleteFromFavorite = useStore(store => store.deleteFromFavorite);

  const [viewFullDesc, setViewFullDesc] = useState<boolean>(false);
  const [price, setPrice] = useState<CoffeePrice>(details.prices[0]);

  const onBack = () => {
    navigation.pop();
  };

  const onToggleFavorite = () => {
    if (details.favourite) {
      deleteFromFavorite(details.type, details.id);
    } else {
      addToFavorite(details.type, details.id);
    }
  };

  const onAddToCart = () => {
    addToCart({
      id: details.id,
      index: details.index,
      name: details.name,
      roasted: details.roasted,
      imagelink_square: details.imagelink_square,
      special_ingredient: details.special_ingredient,
      type: details.type,
      prices: [{...price, quantity: 1}],
    });
    calculateCartPrice();
    navigation.navigate('Cart');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackgroundInfo
          {...details}
          onBackPress={onBack}
          onFavoritePress={onToggleFavorite}
        />

        <View style={styles.descriptionContainer}>
          <Text style={styles.infoTitle}>Description</Text>
          {viewFullDesc ? (
            <TouchableWithoutFeedback onPress={() => setViewFullDesc(false)}>
              <Text style={styles.descriptionText}>{details.description}</Text>
            </TouchableWithoutFeedback>
          ) : (
            <TouchableWithoutFeedback onPress={() => setViewFullDesc(true)}>
              <Text numberOfLines={3} style={styles.descriptionText}>
                {details.description}
              </Text>
            </TouchableWithoutFeedback>
          )}

          <Text style={styles.infoTitle}>Size</Text>
          <View style={styles.sizeContainer}>
            {details.prices.map(item => (
              <TouchableOpacity
                key={item.size}
                onPress={() => {
                  setPrice(item);
                }}
                style={[
                  styles.sizeButton,
                  {
                    borderColor:
                      item.size === price.size
                        ? COLORS.primaryOrangeHex
                        : COLORS.primaryDarkGreyHex,
                  },
                ]}>
                <Text
                  style={[
                    styles.sizeText,
                    {
                      fontSize: isCoffee ? FONTSIZE.size_16 : FONTSIZE.size_14,
                      color:
                        item.size === price.size
                          ? COLORS.primaryOrangeHex
                          : COLORS.secondaryLightGreyHex,
                    },
                  ]}>
                  {item.size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <PaymentFooter
          onButtonPress={onAddToCart}
          buttonLabel="Add to Cart"
          price={price}
        />
      </ScrollView>
    </View>
  );
};
export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  scrollView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  descriptionContainer: {
    padding: SPACING.space_20,
  },
  infoTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
    marginBottom: SPACING.space_10,
  },
  descriptionText: {
    letterSpacing: 0.5,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
    marginBottom: SPACING.space_30,
  },
  sizeContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: SPACING.space_20,
  },
  sizeButton: {
    flex: 1,
    backgroundColor: COLORS.primaryDarkGreyHex,
    alignItems: 'center',
    justifyContent: 'center',
    height: SPACING.space_24 * 2,
    borderRadius: BORDERRADIUS.radius_10,
    borderWidth: 2,
  },
  sizeText: {
    fontFamily: FONTFAMILY.poppins_medium,
  },
});
