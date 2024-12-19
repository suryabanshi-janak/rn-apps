import { useColorScheme } from 'react-native';
import { Stack } from 'expo-router';
import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useDrizzleStudio } from 'expo-drizzle-studio-plugin';
import * as SQLite from 'expo-sqlite';
import { dbName } from '@/db';
import { useWorkouts } from '@/store';
import { useEffect } from 'react';

const db = SQLite.openDatabaseSync(dbName);

export default function RootLayout() {
  const colorScheme = useColorScheme();
  useDrizzleStudio(db);

  const loadWorkouts = useWorkouts((store) => store.loadWorkouts);

  useEffect(() => {
    loadWorkouts();
  }, []);

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
