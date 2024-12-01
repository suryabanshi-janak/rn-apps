import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

import QuestionCard from '../components/QuestionCard';
import CustomButton from '../components/CustomButton';
import questions from '../questions';
import Card from '../components/Card';

const QuizScreen = () => {
  const [questionIndex, setQuestionIndex] = useState(0);

  const question = questions[questionIndex];

  const onNext = () => {
    setQuestionIndex((prev) => prev + 1);
  };

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <View>
          <Text style={styles.question}>Question {questionIndex + 1}/5</Text>
        </View>

        {question ? (
          <View>
            <QuestionCard question={question} />
            <Text style={styles.time}>20 sec</Text>
          </View>
        ) : (
          <Card title='Well Done!'>
            <Text>Correct answers: 3/5</Text>
            <Text>Best Score: 10</Text>
          </Card>
        )}

        <CustomButton
          title='Next'
          rightIcon={
            <FontAwesome6 name='arrow-right-long' size={16} color='white' />
          }
          onPress={onNext}
        />
      </View>
    </SafeAreaView>
  );
};
export default QuizScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fdfef4',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  question: {
    textAlign: 'center',
    color: '#005055',
    paddingTop: 20,
  },
  time: {
    textAlign: 'center',
    color: '#005055',
    fontWeight: '500',
    marginTop: 15,
  },
});
