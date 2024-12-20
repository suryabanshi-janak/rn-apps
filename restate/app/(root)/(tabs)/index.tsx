import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text className='text-lg font-bold'>
        Edit app/index.tsx to edit this screen.
      </Text>

      <Link href='/sign-in' className='mt-4 text-xl'>
        Sign In
      </Link>
      <Link href='/explore' className='mt-4 text-xl'>
        Explore
      </Link>
      <Link href='/profile' className='mt-4 text-xl'>
        Profile
      </Link>
      <Link href='/properties/1' className='mt-4 text-xl'>
        Properties
      </Link>
    </View>
  );
}
