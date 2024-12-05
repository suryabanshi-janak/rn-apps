import { ComponentProps } from 'react';
import { useController } from 'react-hook-form';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';

type CustomTextInputProps = {
  label?: string;
  name: string;
  containerStyle?: StyleProp<ViewStyle>;
} & ComponentProps<typeof TextInput>;

const CustomTextInput = ({
  label,
  name,
  containerStyle,
  ...props
}: CustomTextInputProps) => {
  const {
    field: { onBlur, value, onChange },
    fieldState: { error },
  } = useController({ name, rules: { required: `${name} is required` } });

  return (
    <View style={containerStyle}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        {...props}
        value={value}
        onBlur={onBlur}
        onChangeText={onChange}
        style={[styles.input, props.style, error ? styles.errorInput : {}]}
      />
      {error && (
        <Text style={styles.error} numberOfLines={1}>
          {error?.message}
        </Text>
      )}
    </View>
  );
};
export default CustomTextInput;

const styles = StyleSheet.create({
  label: {
    fontWeight: '500',
    color: 'dimgray',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gainsboro',
    padding: 10,
    borderRadius: 5,
    marginTop: 4,
    marginBottom: 2,
  },
  errorInput: {
    borderColor: 'crimson',
  },
  error: {
    color: 'crimson',
    height: 17,
    marginBottom: 5,
  },
});
