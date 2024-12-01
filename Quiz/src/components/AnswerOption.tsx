import { Pressable, StyleSheet, Text } from 'react-native';
import { useQuizContext } from '../providers/QuizProvider';

interface AnswerOptionProps {
  option: string;
}

const AnswerOption = ({ option }: AnswerOptionProps) => {
  const { selectedOption, setSelectedOption } = useQuizContext();
  const isSelected = selectedOption === option;

  return (
    <Pressable
      style={[
        styles.container,
        isSelected && { backgroundColor: '#e1f396', borderColor: '#e1f396' },
      ]}
      onPress={() => setSelectedOption(option)}
    >
      <Text>{option}</Text>
    </Pressable>
  );
};
export default AnswerOption;

const styles = StyleSheet.create({
  container: {
    borderColor: 'lightgray',
    borderWidth: 1,
    padding: 20,
    borderRadius: 100,
  },
});
