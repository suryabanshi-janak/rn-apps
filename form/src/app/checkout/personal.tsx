import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';

import CustomButton from '../../components/CustomButton';

const PersonalScreen = () => {
  const onNext = () => {
    router.push('/checkout/payment');
  };

  return (
    <View style={styles.container}>
      <Text>Personal Screen</Text>

      <CustomButton title='Next' style={styles.button} onPress={onNext} />
    </View>
  );
};
export default PersonalScreen;

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
