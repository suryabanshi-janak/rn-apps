import { StyleSheet, Text, View } from 'react-native';
import AnswerOption from './AnswerOption';

const QuestionCard = () => {
  return (
    <View style={styles.questionCard}>
      <Text style={styles.question}>What is React Native?</Text>

      <View style={{ gap: 10 }}>
        <AnswerOption />
        <AnswerOption />
        <AnswerOption />
        <AnswerOption />
      </View>
    </View>
  );
};
export default QuestionCard;

const styles = StyleSheet.create({
  questionCard: {
    backgroundColor: 'white',
    padding: 20,
    paddingVertical: 40,
    borderRadius: 20,
    gap: 20,

    elevation: 5,
  },
  question: {
    fontWeight: '500',
    fontSize: 24,
  },
});
