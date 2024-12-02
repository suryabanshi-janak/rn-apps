import { Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{ title: 'Home', headerTitleAlign: 'center' }}
      />
      <Stack.Screen name='camera' options={{ headerShown: false }} />
    </Stack>
  );
};
export default Layout;

const styles = StyleSheet.create({});
