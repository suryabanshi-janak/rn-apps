import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import KeyboardAwareScrollView from '../../components/KeyboardAwareScrollView';
import {
  PersonalInfo,
  PersonalInfoSchema,
} from '../../contexts/CheckoutFormProvider';

const PersonalScreen = () => {
  const form = useForm<PersonalInfo>({
    resolver: zodResolver(PersonalInfoSchema),
  });

  const onNext: SubmitHandler<PersonalInfo> = (data) => {
    console.log('🚀 ~ onNext ~ data:', data);
    // router.push('/checkout/payment');
  };

  return (
    <KeyboardAwareScrollView>
      <FormProvider {...form}>
        <Text>Personal Screen</Text>

        <CustomTextInput
          name='fullName'
          label='Full Name'
          placeholder='John Doe'
        />
        <CustomTextInput name='address' label='Address' placeholder='Address' />

        <View style={{ flexDirection: 'row', gap: 5 }}>
          <CustomTextInput
            name='city'
            label='City'
            placeholder='City'
            containerStyle={{ flex: 1 }}
          />
          <CustomTextInput
            name='postCode'
            label='Post Code'
            placeholder='1234'
            containerStyle={{ flex: 1 }}
          />
        </View>

        <CustomTextInput
          name='phone'
          label='Phone'
          placeholder='1234556789'
          inputMode='tel'
        />

        <CustomButton
          title='Next'
          style={styles.button}
          onPress={form.handleSubmit(onNext)}
        />
      </FormProvider>
    </KeyboardAwareScrollView>
  );
};
export default PersonalScreen;

const styles = StyleSheet.create({
  button: {
    marginTop: 'auto',
  },
});
