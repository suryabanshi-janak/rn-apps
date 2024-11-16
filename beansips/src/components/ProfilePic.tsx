import {Image, StyleSheet, View} from 'react-native';
import {COLORS, SPACING} from '../theme/theme';

const ProfilePic = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/app_images/avatar.png')}
        style={styles.img}
      />
    </View>
  );
};
export default ProfilePic;

const styles = StyleSheet.create({
  container: {
    borderRadius: SPACING.space_12,
    borderWidth: 2,
    borderColor: COLORS.secondaryGreyHex,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  img: {
    height: SPACING.space_36,
    width: SPACING.space_36,
  },
});
