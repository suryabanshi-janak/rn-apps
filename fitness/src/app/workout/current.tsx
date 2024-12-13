import React from 'react';
import { FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import { Redirect, Stack } from 'expo-router';

import WorkoutExerciseItem from '@/components/logger/WorkoutExerciseItem';
import CustomButton from '@/components/general/CustomButton';
import WorkoutHeader from '@/components/logger/WorkoutHeader';
import SelectExerciseModal from '@/components/logger/SelectExerciseModal';
import { useWorkouts } from '@/store';

export default function CurrentWorkoutScreen() {
  const currentWorkout = useWorkouts((state) => state.currentWorkout);
  const finishWorkout = useWorkouts((state) => state.finishWorkout);
  const addExercise = useWorkouts((state) => state.addExercise);

  const headerHeight = useHeaderHeight();

  if (!currentWorkout) {
    return <Redirect href={'/'} />;
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () => (
            <CustomButton
              onPress={() => finishWorkout()}
              title='Finish'
              style={{ padding: 7, paddingHorizontal: 15, width: 'auto' }}
            />
          ),
        }}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        keyboardVerticalOffset={headerHeight}
      >
        <FlatList
          data={currentWorkout.exercises}
          contentContainerStyle={{ gap: 10, padding: 10 }}
          renderItem={({ item }) => <WorkoutExerciseItem exercise={item} />}
          ListHeaderComponent={<WorkoutHeader />}
          ListFooterComponent={
            <SelectExerciseModal
              onSelectExercise={(name: string) => addExercise(name)}
            />
          }
        />
      </KeyboardAvoidingView>
    </>
  );
}
