import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';

import CustomButton from '../../components/CustomButton';

const PaymentScreen = () => {
  const onNext = () => {
    router.push('/checkout/confirm');
  };

  return (
    <View style={styles.container}>
      <Text>Payment Screen</Text>

      <CustomButton title='Next' style={styles.button} onPress={onNext} />
    </View>
  );
};
export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  button: {
    marginTop: 'auto',
    marginBottom: 10,
  },
});
