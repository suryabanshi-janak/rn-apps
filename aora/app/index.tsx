import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

const app = () => {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Text className='font-pbold text-2xl'>Aora!</Text>
      <Link href='/profile'>Go to profile</Link>
      <StatusBar style='auto' />
    </View>
  );
};
export default app;
