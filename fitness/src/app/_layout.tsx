import { useColorScheme } from 'react-native';
import { Stack } from 'expo-router';
import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name='index' options={{ title: 'Home' }} />
          <Stack.Screen name='workout/current' options={{ title: 'Workout' }} />
          <Stack.Screen name='workout/[id]' options={{ title: 'Workout' }} />
        </Stack>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
