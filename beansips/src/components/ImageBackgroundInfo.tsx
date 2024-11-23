import {
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';

import {CoffeeData} from '../types';
import GradientBGIcon from './GradientBGIcon';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import {Text} from 'react-native';
import CustomIcon from './CustomIcon';

type ImageBackgroundInfoProps = CoffeeData & {
  onFavoritePress: () => void;
  onBackPress?: () => void;
};

const ImageBackgroundInfo = ({
  name,
  special_ingredient,
  imagelink_portrait,
  favourite,
  type,
  ingredients,
  average_rating,
  ratings_count,
  roasted,
  onBackPress,
  onFavoritePress,
}: ImageBackgroundInfoProps) => {
  const isBean = type === 'Bean';

  return (
    <View>
      <ImageBackground
        source={imagelink_portrait as ImageSourcePropType}
        style={styles.imageBackground}>
        <View style={styles.actionContainer}>
          {onBackPress ? (
            <TouchableOpacity onPress={onBackPress}>
              <GradientBGIcon
                name="left"
                color={COLORS.primaryLightGreyHex}
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
          ) : (
            <View />
          )}

          <TouchableOpacity onPress={onFavoritePress}>
            <GradientBGIcon
              name="like"
              color={
                favourite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex
              }
              size={FONTSIZE.size_16}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.containerRow}>
            <View>
              <Text style={styles.titleText}>{name}</Text>
              <Text style={styles.subTitleText}>{special_ingredient}</Text>
            </View>

            <View style={styles.upperInfo}>
              <View style={styles.upperInfoContainer}>
                <CustomIcon
                  name={isBean ? 'bean' : 'beans'}
                  size={isBean ? FONTSIZE.size_18 : FONTSIZE.size_24}
                  color={COLORS.primaryOrangeHex}
                />
                <Text style={styles.upperInfoText}>{type}</Text>
              </View>
              <View style={styles.upperInfoContainer}>
                <CustomIcon
                  name={isBean ? 'location' : 'drop'}
                  size={isBean ? FONTSIZE.size_18 : FONTSIZE.size_24}
                  color={COLORS.primaryOrangeHex}
                />
                <Text style={styles.upperInfoText}>{ingredients}</Text>
              </View>
            </View>
          </View>

          <View style={styles.infoContainerRow}>
            <View style={styles.ratingsContainer}>
              <CustomIcon
                name="star"
                color={COLORS.primaryOrangeHex}
                size={FONTSIZE.size_20}
              />
              <Text style={styles.ratingText}>{average_rating}</Text>
              <Text style={styles.ratingCountText}>{ratings_count}</Text>
            </View>
            <View style={styles.roastedContainer}>
              <Text style={styles.roastedText}>{roasted}</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default ImageBackgroundInfo;

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    aspectRatio: 20 / 25,
    justifyContent: 'space-between',
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SPACING.space_16,
  },
  infoContainer: {
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopLeftRadius: SPACING.space_20,
    borderTopRightRadius: SPACING.space_20,
    paddingVertical: SPACING.space_20,
    paddingHorizontal: SPACING.space_24,
  },
  containerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleText: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
  },
  subTitleText: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
  },
  upperInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.space_20,
  },
  upperInfoContainer: {
    height: 55,
    width: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SPACING.space_15,
    backgroundColor: COLORS.primaryBlackHex,
  },
  upperInfoText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_10,
    color: COLORS.primaryWhiteHex,
  },
  infoContainerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: SPACING.space_18,
  },
  ratingsContainer: {
    flexDirection: 'row',
    gap: SPACING.space_10,
    alignItems: 'center',
  },
  ratingText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
  ratingCountText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryWhiteHex,
  },
  roastedContainer: {
    height: 55,
    width: 55 * 2 + SPACING.space_20,
    borderRadius: BORDERRADIUS.radius_15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryBlackHex,
  },
  roastedText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_10,
    color: COLORS.primaryWhiteHex,
  },
});
