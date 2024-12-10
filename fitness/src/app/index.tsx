import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/general/Themed';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Link href='/workout/current'>
        <Text>Current Workout</Text>
      </Link>
      <Link href='/workout/123'>
        <Text>Workout</Text>
      </Link>

      <Text>HomeScreen</Text>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({});
