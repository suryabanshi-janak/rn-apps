import { StyleSheet, Text, View } from 'react-native';

const AnswerOption = () => {
  return (
    <View style={styles.container}>
      <Text>This is an option</Text>
    </View>
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
