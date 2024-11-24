import LottieView from 'lottie-react-native';
import {StyleSheet, Text, View} from 'react-native';
import {FONTFAMILY, FONTSIZE, COLORS} from '../theme/theme';

const NoCartData = ({message}: {message: string}) => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../lottie/coffeecup.json')}
        style={styles.lottie}
        autoPlay
        loop
      />
      <Text style={styles.messageText}>{message}</Text>
    </View>
  );
};
export default NoCartData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  lottie: {
    height: 300,
  },
  messageText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryOrangeHex,
    textAlign: 'center',
  },
});
