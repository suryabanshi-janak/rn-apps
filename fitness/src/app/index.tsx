import { Link, router } from 'expo-router';
import { FlatList, StyleSheet } from 'react-native';

import { View } from '@/components/general/Themed';
import { useWorkouts } from '@/store';
import CustomButton from '@/components/general/CustomButton';
import WorkoutListItem from '@/components/workouts/WorkoutListItem';

const HomeScreen = () => {
  const currentWorkout = useWorkouts((state) => state.currentWorkout);
  const startWorkout = useWorkouts((state) => state.startWorkout);
  const workouts = useWorkouts((state) => state.workouts);

  const onStartWorkout = () => {
    startWorkout();
    router.push('/workout/current');
  };

  return (
    <View
      style={{
        flex: 1,
        gap: 10,
        padding: 10,
        backgroundColor: 'transparent',
      }}
    >
      {currentWorkout ? (
        <Link href='/workout/current' asChild>
          <CustomButton title='Resume workout' />
        </Link>
      ) : (
        <CustomButton title='Start new workout' onPress={onStartWorkout} />
      )}

      <FlatList
        data={workouts}
        contentContainerStyle={{ gap: 8 }}
        renderItem={({ item }) => <WorkoutListItem workout={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({});
