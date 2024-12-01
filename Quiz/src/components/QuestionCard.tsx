import { useState } from 'react';
import { View } from 'react-native';

import Card from './Card';
import AnswerOption from './AnswerOption';
import { Question } from '../types';

type QuestionCardProps = {
  question: Question;
};

const QuestionCard = ({ question }: QuestionCardProps) => {
  const [selectedOption, setSelectedOption] = useState<string>();

  const onOptionPress = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <Card title={question.title}>
      <View style={{ gap: 10 }}>
        {question.options.map((option) => (
          <AnswerOption
            key={option}
            option={option}
            isSelected={option === selectedOption}
            onPress={() => onOptionPress(option)}
          />
        ))}
      </View>
    </Card>
  );
};
export default QuestionCard;
