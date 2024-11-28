import { Image, ImageProps, StyleSheet, Text, View } from 'react-native';

const ProjectCard = ({ image, name }: { image: ImageProps; name: string }) => {
  return (
    <View>
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};
export default ProjectCard;

const styles = StyleSheet.create({
  image: {
    height: 150,
    aspectRatio: 16 / 9,
    borderRadius: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'dimgray',
    marginTop: 10,
  },
});
