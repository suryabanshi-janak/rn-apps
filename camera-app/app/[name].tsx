import { Link, Stack, useLocalSearchParams } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const ImageScreen = () => {
  const { name } = useLocalSearchParams<{ name: string }>();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Stack.Screen options={{ title: name }} />
      <Text style={{ textAlign: 'center', fontWeight: '500', fontSize: 20 }}>
        ImageScreen: {name}
      </Text>

      <Link href='/' asChild>
        <Pressable>
          <Text>Home</Text>
        </Pressable>
      </Link>
    </View>
  );
};
export default ImageScreen;

const styles = StyleSheet.create({});
