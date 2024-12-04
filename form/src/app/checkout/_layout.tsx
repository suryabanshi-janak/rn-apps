import { Stack } from 'expo-router';
import { View, Text } from 'react-native';

const CheckoutLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='personal' options={{ title: 'Personal' }} />
      <Stack.Screen name='payment' options={{ title: 'Payment' }} />
      <Stack.Screen name='confirm' options={{ title: 'Confirm' }} />
    </Stack>
  );
};

export default CheckoutLayout;
