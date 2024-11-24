import {StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import ProfilePic from './ProfilePic';
import GradientBGIcon from './GradientBGIcon';

interface HeaderBarProps {
  title?: string;
}

const HeaderBar = ({title}: HeaderBarProps) => {
  return (
    <View style={styles.container}>
      <GradientBGIcon
        name="menu"
        color={COLORS.primaryLightGreyHex}
        size={FONTSIZE.size_16}
      />
      <Text style={styles.headerText}>{title}</Text>
      <ProfilePic />
    </View>
  );
};
export default HeaderBar;

const styles = StyleSheet.create({
  container: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
});
