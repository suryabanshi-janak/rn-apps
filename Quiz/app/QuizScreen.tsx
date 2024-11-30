import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import QuestionCard from '../components/QuestionCard';

const QuizScreen = () => {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <View>
          <Text style={styles.question}>Question 1/5</Text>
        </View>

        <View>
          <QuestionCard />
          <Text style={styles.time}>20 sec</Text>
        </View>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
          <FontAwesome6
            name='arrow-right-long'
            size={16}
            color='white'
            style={styles.buttonIcon}
          />
        </Pressable>
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
  button: {
    backgroundColor: '#005055',
    padding: 20,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    letterSpacing: 1.5,
    fontSize: 16,
  },
  buttonIcon: {
    position: 'absolute',
    right: 20,
  },
});
