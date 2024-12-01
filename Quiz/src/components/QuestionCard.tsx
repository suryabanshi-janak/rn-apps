import { View } from 'react-native';

import Card from './Card';
import AnswerOption from './AnswerOption';
import { Question } from '../types';

type QuestionCardProps = {
  question: Question;
};

const QuestionCard = ({ question }: QuestionCardProps) => {
  return (
    <Card title={question.title}>
      <View style={{ gap: 10 }}>
        {question.options.map((option) => (
          <AnswerOption key={option} option={option} />
        ))}
      </View>
    </Card>
  );
};
export default QuestionCard;
