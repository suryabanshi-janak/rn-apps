import { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { FontAwesome6 } from '@expo/vector-icons';

import QuestionCard from '../components/QuestionCard';
import CustomButton from '../components/CustomButton';
import Card from '../components/Card';
import { useQuizContext } from '../providers/QuizProvider';
import { useTimer } from '../hooks/useTimer';

const QuizScreen = () => {
  const { onNext, questionIndex, question, totalQuestions, score, bestScore } =
    useQuizContext();
  const { startTimer, clearTimer, time } = useTimer();

  useEffect(() => {
    startTimer();

    return () => clearTimer();
  }, [question]);

  useEffect(() => {
    if (time <= 0) onNext();
  }, [time]);

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <View>
          <Text style={styles.question}>
            Question {questionIndex + 1}/{totalQuestions}
          </Text>
        </View>

        {question ? (
          <View>
            <QuestionCard question={question} />
            <Text style={styles.time}>{time} sec</Text>
          </View>
        ) : (
          <>
            <LottieView
              autoPlay
              loop={false}
              style={StyleSheet.absoluteFill}
              source={require('../../assets/party.json')}
            />
            <Card title='Well Done!'>
              <Text>
                Correct answers: {score}/{totalQuestions}
              </Text>
              <Text>Best Score: {bestScore}</Text>
            </Card>
          </>
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
