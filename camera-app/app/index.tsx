import { useState } from 'react';
import { Link, useFocusEffect } from 'expo-router';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as FileSystem from 'expo-file-system';

type Media = {
  name: string;
  uri: string;
};

const HomeScreen = () => {
  const [images, setImages] = useState<Media[]>([]);

  useFocusEffect(() => {
    loadFiles();
  });

  const loadFiles = async () => {
    if (!FileSystem.documentDirectory) return;

    const files = await FileSystem.readDirectoryAsync(
      FileSystem.documentDirectory
    );
    setImages(
      files
        .filter((file) => file.endsWith('.jpg'))
        .map((file) => ({
          name: file,
          uri: FileSystem.documentDirectory + file,
        }))
    );
  };
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <FlatList
        data={images}
        numColumns={3}
        contentContainerStyle={{ gap: 1 }}
        columnWrapperStyle={{ gap: 1 }}
        renderItem={({ item }) => (
          <Link href={`/${item.name}`} asChild>
            <Pressable style={{ flex: 1, maxWidth: '33.33%' }}>
              <Image
                source={{ uri: item.uri }}
                style={{ aspectRatio: 3 / 4, borderRadius: 5 }}
              />
            </Pressable>
          </Link>
        )}
      />

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
