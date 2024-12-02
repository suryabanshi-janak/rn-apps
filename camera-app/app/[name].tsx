import { router, Stack, useLocalSearchParams } from 'expo-router';
import { Image, StyleSheet, View } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { MaterialIcons } from '@expo/vector-icons';

const ImageScreen = () => {
  const { name } = useLocalSearchParams<{ name: string }>();

  const fullUri = FileSystem.documentDirectory + name;

  const onDelete = async () => {
    await FileSystem.deleteAsync(fullUri);
    router.back();
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Stack.Screen
        options={{
          title: 'Media',
          // headerTitleAlign: 'center',
          headerRight: () => (
            <View style={{ flexDirection: 'row', gap: 5 }}>
              <MaterialIcons
                name='delete'
                size={26}
                color='crimson'
                onPress={onDelete}
              />
              <MaterialIcons
                name='save'
                size={26}
                color='dimgray'
                onPress={() => {}}
              />
            </View>
          ),
        }}
      />

      <Image
        source={{ uri: fullUri }}
        style={{ width: '100%', height: '100%' }}
      />
    </View>
  );
};
export default ImageScreen;

const styles = StyleSheet.create({});
