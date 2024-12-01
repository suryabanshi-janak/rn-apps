import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ textAlign: 'center', fontWeight: '500', fontSize: 20 }}>
        HomeScreen
      </Text>

      <Link href='/image-1' asChild>
        <Pressable>
          <Text>Image 1</Text>
        </Pressable>
      </Link>
      <Link href='/image-2' asChild>
        <Pressable>
          <Text>Image 2</Text>
        </Pressable>
      </Link>
      <Link href='/image-3' asChild>
        <Pressable>
          <Text>Image 2</Text>
        </Pressable>
      </Link>

      <Link href='/camera' asChild>
        <Pressable
          style={{
            backgroundColor: 'royalblue',
            padding: 15,
            borderRadius: 50,
            position: 'absolute',
            bottom: 10,
            right: 10,
          }}
        >
          <MaterialIcons name='photo-camera' size={30} color='white' />
        </Pressable>
      </Link>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({});
