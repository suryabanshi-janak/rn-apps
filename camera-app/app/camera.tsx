import { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Button,
  Image,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import {
  CameraCapturedPicture,
  CameraType,
  CameraView,
  useCameraPermissions,
} from 'expo-camera';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import * as FileSystem from 'expo-file-system';
import { SafeAreaView } from 'react-native-safe-area-context';
import path from 'path';

const CameraScreen = () => {
  const [permission, requestPermission] = useCameraPermissions();

  const [picture, setPicture] = useState<CameraCapturedPicture>();
  const [facing, setFacing] = useState<CameraType>('back');
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [video, setVideo] = useState<string>();

  const camera = useRef<CameraView>(null);

  useEffect(() => {
    if (permission && !permission?.granted && permission?.canAskAgain) {
      requestPermission();
    }
  }, [permission]);

  const toggleFacing = () => {
    setFacing((current) => (current === 'back' ? 'front' : 'back'));
  };

  const onPress = () => {
    if (isRecording) {
      camera.current?.stopRecording();
    } else {
      takePicture();
    }
  };

  const takePicture = async () => {
    const res = await camera.current?.takePictureAsync();
    setPicture(res);
  };

  const startRecording = async () => {
    setIsRecording(true);
    const res = await camera.current?.recordAsync({ maxDuration: 3 });
    console.log(res);
    setVideo(res?.uri);
    setIsRecording(false);
  };

  const saveFile = async (uri: string) => {
    const filename = path.parse(uri).base;

    await FileSystem.copyAsync({
      from: uri,
      to: FileSystem.documentDirectory + filename,
    });
    setPicture(undefined);

    router.back();
  };

  if (!permission) {
    return <ActivityIndicator />;
  }

  if (picture) {
    return (
      <View>
        <Image source={{ uri: picture.uri }} style={styles.image} />
        <View
          style={{
            padding: 10,
            position: 'absolute',
            bottom: 0,
            width: '100%',
          }}
        >
          <SafeAreaView edges={['bottom']}>
            <Button title='Save' onPress={() => saveFile(picture.uri)} />
          </SafeAreaView>
        </View>
        <MaterialIcons
          name='close'
          size={30}
          color='white'
          style={styles.close}
          onPress={() => setPicture(undefined)}
        />
      </View>
    );
  }

  return (
    <View>
      <CameraView ref={camera} style={styles.camera} facing={facing}>
        <View style={styles.footer}>
          <View />
          <Pressable
            style={[
              styles.recordButton,
              { backgroundColor: isRecording ? 'crimson' : 'white' },
            ]}
            onPress={onPress}
            onLongPress={startRecording}
          />
          <MaterialIcons
            name='flip-camera-ios'
            size={30}
            color='white'
            onPress={toggleFacing}
          />
        </View>
      </CameraView>

      <MaterialIcons
        name='close'
        size={30}
        color='white'
        style={styles.close}
        onPress={() => router.back()}
      />
    </View>
  );
};
export default CameraScreen;

const styles = StyleSheet.create({
  camera: {
    height: '100%',
    width: '100%',
  },
  footer: {
    marginTop: 'auto',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#00000099',
    flexDirection: 'row',
  },
  recordButton: {
    height: 50,
    width: 50,
    backgroundColor: 'white',
    borderRadius: 100,
  },
  close: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
