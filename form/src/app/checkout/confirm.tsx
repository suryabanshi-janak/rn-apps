import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';

import CustomButton from '../../components/CustomButton';

const CofirmScreen = () => {
  const onNext = () => {
    router.dismissAll();
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text>Confirm Screen</Text>

      <CustomButton title='Next' style={styles.button} onPress={onNext} />
    </View>
  );
};
export default CofirmScreen;

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
