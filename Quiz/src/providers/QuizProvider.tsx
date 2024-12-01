import { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import questions from '../questions';
import { Question } from '../types';

type QuizContext = {
  questionIndex: number;
  question?: Question;
  onNext: () => void;
  selectedOption?: string;
  setSelectedOption: (option: string) => void;
  totalQuestions: number;
  score: number;
  bestScore: number;
};

const QuizContext = createContext<QuizContext>({
  questionIndex: 0,
  totalQuestions: 0,
  score: 0,
  onNext: () => {},
  setSelectedOption: () => {},
  bestScore: 0,
});

export const QuizProvider = ({ children }: { children: React.ReactNode }) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string>();
  const [score, setScore] = useState<number>(0);
  const [bestScore, setBestScore] = useState(0);

  const question = questions[questionIndex];
  const isFinished = questionIndex >= questions.length;

  useEffect(() => {
    loadBestScore();
  }, []);

  useEffect(() => {
    if (isFinished && score > bestScore) {
      setBestScore(score);
      saveBestScore(score);
    }
  }, [isFinished]);

  const onReset = () => {
    setQuestionIndex(0);
    setSelectedOption(undefined);
    setScore(0);
  };

  const onNext = () => {
    if (isFinished) {
      onReset();
      return;
    }

    if (selectedOption === question?.correctAnswer) {
      setScore((prev) => prev + 1);
    }

    setQuestionIndex((prev) => prev + 1);
  };

  const saveBestScore = async (value: number) => {
    try {
      await AsyncStorage.setItem('best-score', value.toString());
    } catch (e) {
      // saving error
    }
  };

  const loadBestScore = async () => {
    try {
      const value = await AsyncStorage.getItem('best-score');
      if (value !== null) {
        setBestScore(parseInt(value, 10));
      }
    } catch (e) {
      // error reading value
    }
  };

  return (
    <QuizContext.Provider
      value={{
        questionIndex,
        question,
        onNext,
        selectedOption,
        setSelectedOption,
        totalQuestions: questions.length,
        score,
        bestScore,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => useContext(QuizContext);
