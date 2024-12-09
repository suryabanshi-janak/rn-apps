import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Link href='/workout/current'>Current Workout</Link>
      <Link href='/workout/123'>Workout</Link>

      <Text>HomeScreen</Text>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({});
