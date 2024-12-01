import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const CameraScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ textAlign: 'center', fontWeight: '500', fontSize: 20 }}>
        CameraScreen
      </Text>

      <Link href='/' asChild>
        <Pressable>
          <Text>Home</Text>
        </Pressable>
      </Link>
    </View>
  );
};
export default CameraScreen;

const styles = StyleSheet.create({});
