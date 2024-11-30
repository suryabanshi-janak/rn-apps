import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import QuizScreen from './app/QuizScreen';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <QuizScreen />
      <StatusBar style='auto' />
    </View>
  );
}
