import { Pressable, StyleSheet, Text } from 'react-native';

interface AnswerOptionProps {
  option: string;
  isSelected: boolean;
  onPress: () => void;
}

const AnswerOption = ({ option, isSelected, onPress }: AnswerOptionProps) => {
  return (
    <Pressable
      style={[
        styles.container,
        isSelected && { backgroundColor: '#e1f396', borderColor: '#e1f396' },
      ]}
      onPress={onPress}
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
