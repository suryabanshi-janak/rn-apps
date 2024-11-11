import { useState } from 'react';
import { View, Text, ScrollView, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../../constants';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { Link } from 'expo-router';

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });

  const onSubmit = () => {};

  return (
    <SafeAreaView className='h-full bg-primary'>
      <ScrollView>
        <View
          className='flex justify-center w-full h-full px-4 my-6'
          style={{
            minHeight: Dimensions.get('window').height - 100,
          }}
        >
          <Image
            source={images.logo}
            resizeMode='contain'
            className='w-[115px] h-[34px]'
          />

          <Text className='mt-10 text-2xl font-semibold text-white font-psemibold'>
            Sign up to Aora
          </Text>

          <FormField
            title='Username'
            value={form.username}
            onChangeText={(text) => setForm({ ...form, username: text })}
            otherStyles='mt-7'
          />

          <FormField
            title='Email'
            value={form.email}
            onChangeText={(text) => setForm({ ...form, email: text })}
            keyboardType='email-address'
            otherStyles='mt-7'
          />

          <FormField
            title='Password'
            value={form.password}
            onChangeText={(text) => setForm({ ...form, password: text })}
            otherStyles='mt-7'
          />

          <CustomButton
            title='Sign up'
            onPress={onSubmit}
            containerStyles='mt-7'
          />

          <View className='flex flex-row justify-center gap-2 pt-5'>
            <Text className='text-lg text-gray-100 font-pregular'>
              Already have an account?
            </Text>
            <Link
              href='/sign-in'
              className='text-lg text-secondary font-psemibold'
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
