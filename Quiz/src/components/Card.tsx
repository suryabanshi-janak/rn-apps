import { PropsWithChildren } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type CardProps = {
  title: string;
};

const Card = ({ title, children }: PropsWithChildren<CardProps>) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      {children}
    </View>
  );
};
export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    paddingVertical: 40,
    borderRadius: 20,
    gap: 20,

    elevation: 5,
  },
  title: {
    fontWeight: '500',
    fontSize: 24,
  },
});
