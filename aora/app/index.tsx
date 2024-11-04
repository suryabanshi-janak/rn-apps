import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const app = () => {
  return (
    <View style={styles.container}>
      <Text>Aora!</Text>
      <StatusBar style='auto' />
    </View>
  );
};
export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
