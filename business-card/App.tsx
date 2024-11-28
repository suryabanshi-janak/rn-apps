import { StatusBar } from 'expo-status-bar';
import {
  Button,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome6 } from '@expo/vector-icons';
import ProjectCard from './ProjectCard';

export default function App() {
  const onContactMe = () => {
    Linking.openURL('mailto:giner@gmail.com');
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} edges={['bottom']}>
        <View style={styles.container}>
          <Image
            source={{
              uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg',
            }}
            style={{ width: '100%', aspectRatio: 16 / 9 }}
          />
          <Image
            source={require('./assets/vadim.png')}
            style={{
              width: 150,
              height: 150,
              borderRadius: 150,
              borderWidth: 5,
              borderColor: '#fff',
              marginTop: -75,
            }}
          />
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Ginger Bell</Text>
          <Text>Founder of Gingering</Text>

          <View style={{ flexDirection: 'row', gap: 10, marginVertical: 10 }}>
            <FontAwesome6 name='github' size={24} color='black' />
            <FontAwesome6 name='x-twitter' size={24} color='black' />
            <FontAwesome6 name='at' size={24} color='black' />
          </View>

          <Button title='Contact me' onPress={onContactMe} />

          <Text style={{ fontSize: 16, padding: 10, lineHeight: 20 }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
            deleniti accusamus nisi temporibus obcaecati pariatur exercitationem
            optio est
          </Text>

          <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Projects</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ padding: 10, gap: 10 }}
          >
            <ProjectCard
              name='Apple Cards'
              image={require('./assets/projects/project1.jpeg')}
            />
            <ProjectCard
              name='Trello'
              image={require('./assets/projects/project2.jpeg')}
            />
            <ProjectCard
              name='Flappy bird'
              image={require('./assets/projects/project3.jpeg')}
            />
            <ProjectCard
              name='Todo app'
              image={require('./assets/projects/project4.jpeg')}
            />
          </ScrollView>

          <StatusBar style='light' />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
