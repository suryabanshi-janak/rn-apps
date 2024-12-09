import { Link, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

const WorkoutScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Workout id: {id}</Text>
    </View>
  );
};
export default WorkoutScreen;

const styles = StyleSheet.create({});
