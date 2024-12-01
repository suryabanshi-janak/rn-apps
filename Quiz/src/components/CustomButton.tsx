import React, { ComponentProps } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type CustomButtonProps = {
  title: string;
  rightIcon?: React.ReactNode;
} & ComponentProps<typeof Pressable>;

const CustomButton = ({ title, rightIcon, ...props }: CustomButtonProps) => {
  return (
    <Pressable {...props} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>

      <View style={styles.rightIcon}>{rightIcon}</View>
    </Pressable>
  );
};
export default CustomButton;

const styles = StyleSheet.create({
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
  rightIcon: {
    position: 'absolute',
    right: 20,
  },
});
