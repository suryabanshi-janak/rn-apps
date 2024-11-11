import { useState } from 'react';
import {
  View,
  Text,
  TextInputProps,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

import { icons } from '../constants';

type FormFieldProps = TextInputProps & {
  title: string;
  value: string;
  placeholder?: string;
  onChangeText: (text: string) => void;
  otherStyles?: string;
};

const FormField = ({
  title,
  value,
  placeholder,
  onChangeText,
  otherStyles,
  ...props
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className='text-base text-gray-100 font-pmedium'>{title}</Text>

      <View className='flex flex-row items-center w-full h-16 px-4 border-2 bg-black-100 rounded-2xl border-black-200 focus:border-secondary'>
        <TextInput
          className='flex-1 text-base text-white font-psemibold'
          value={value}
          placeholder={placeholder}
          placeholderTextColor='#7B7B8B'
          onChangeText={onChangeText}
          secureTextEntry={title === 'Password' && !showPassword}
          {...props}
        />

        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className='w-6 h-6'
              resizeMode='contain'
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
