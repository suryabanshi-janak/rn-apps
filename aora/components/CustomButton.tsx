import { Text, TouchableOpacity } from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
  containerStyles?: string;
  textStyles?: string;
  isLoading?: boolean;
};

const CustomButton = ({
  title,
  onPress,
  containerStyles,
  textStyles,
  isLoading = false,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isLoading}
      className={`bg-secondary rounded-xl min-h-[50px] flex flex-row justify-center items-center ${containerStyles} ${
        isLoading ? 'opacity-50' : ''
      }`}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
