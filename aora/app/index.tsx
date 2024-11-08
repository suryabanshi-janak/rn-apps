import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

const app = () => {
  return (
    <View className='items-center justify-center flex-1 bg-white'>
      <Text className='text-2xl font-pbold'>Aora!</Text>
      <Link href='/home'>Go to Home</Link>
      <StatusBar style='auto' />
    </View>
  );
};
export default app;
