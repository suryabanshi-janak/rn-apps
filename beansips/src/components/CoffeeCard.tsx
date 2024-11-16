import {
  Dimensions,
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {CoffeeData} from '../types';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import CustomIcon from './CustomIcon';
import BGIcon from './BGIcon';

type CoffeeCardProps = Partial<CoffeeData>;

const CARD_WIDTH = Dimensions.get('window').width * 0.32;

const CoffeeCard = ({
  imagelink_square,
  average_rating,
  name,
  special_ingredient,
  prices,
}: CoffeeCardProps) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.linearGradient}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
      <ImageBackground
        source={imagelink_square as ImageSourcePropType}
        resizeMode="cover"
        style={styles.imgBackground}>
        <View style={styles.ratingContainer}>
          <CustomIcon
            name={'star'}
            color={COLORS.primaryOrangeHex}
            size={FONTSIZE.size_16}
          />
          <Text style={styles.ratingText}>{average_rating}</Text>
        </View>
      </ImageBackground>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subtitle}>{special_ingredient}</Text>
      <View style={styles.footer}>
        <Text style={styles.price}>$ {prices?.[2].price}</Text>
        <TouchableOpacity onPress={() => {}}>
          <BGIcon
            name="add"
            color={COLORS.primaryWhiteHex}
            backgroundColor={COLORS.primaryOrangeHex}
            size={FONTSIZE.size_10}
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};
export default CoffeeCard;

const styles = StyleSheet.create({
  linearGradient: {
    padding: SPACING.space_15,
    borderRadius: BORDERRADIUS.radius_25,
  },
  imgBackground: {
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    borderRadius: BORDERRADIUS.radius_20,
    marginBottom: SPACING.space_15,
    overflow: 'hidden',
  },
  ratingContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.primaryBlackRGBA,
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.space_10,
    paddingHorizontal: SPACING.space_15,
    position: 'absolute',
    borderBottomLeftRadius: BORDERRADIUS.radius_20,
    borderTopRightRadius: BORDERRADIUS.radius_20,
    top: 0,
    right: 0,
  },
  ratingText: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.primaryWhiteHex,
    lineHeight: 22,
    fontSize: FONTSIZE.size_14,
  },
  title: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_16,
  },
  subtitle: {
    fontFamily: FONTFAMILY.poppins_light,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SPACING.space_15,
  },
  price: {
    color: COLORS.primaryWhiteHex,
  },
});
