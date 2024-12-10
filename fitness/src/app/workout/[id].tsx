import { useLocalSearchParams } from 'expo-router';
import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/general/Themed';

const WorkoutScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <View style={{ flex: 1 }}>
      <Text>Workout id: {id}</Text>
    </View>
  );
};
export default WorkoutScreen;

const styles = StyleSheet.create({});
