import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../constants';
import CustomButton from '@/components/CustomButton';

const app = () => {
  return (
    <SafeAreaView className='h-full bg-primary'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='flex items-center justify-center w-full h-full px-4'>
          <Image
            source={images.logo}
            className='w-[130px] h-[84px]'
            resizeMode='contain'
          />

          <Image
            source={images.cards}
            className='max-w-[380px] w-full h-[298px]'
            resizeMode='contain'
          />

          <View className='relative mt-5'>
            <Text className='text-3xl font-bold text-center text-white'>
              Discover Endless{'\n'}
              Possibilities with{' '}
              <Text className='text-secondary-200'>Aora</Text>
            </Text>

            <Image
              source={images.path}
              className='w-[80px] h-[15px] absolute -bottom-2 -right-2'
              resizeMode='contain'
            />
          </View>

          <Text className='px-8 text-sm text-center text-gray-100 font-pregular mt-7'>
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>

          <CustomButton
            title='Continue with Email'
            onPress={() => router.push('/sign-in')}
            containerStyles='w-full mt-6'
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default app;
