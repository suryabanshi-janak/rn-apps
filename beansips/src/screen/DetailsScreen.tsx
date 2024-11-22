import {
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useStore} from '../store/useStore';
import {COLORS} from '../theme/theme';
import ImageBackgroundInfo from '../components/ImageBackgroundInfo';

const DetailsScreen = ({navigation, route}: any) => {
  const isCoffee = route.params.type === 'Coffee';

  const details = useStore(store => (isCoffee ? store.coffee : store.beans))[
    route.params.index
  ];

  const onBack = () => {
    navigation.pop();
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackgroundInfo {...details} onBackPress={onBack} />
      </ScrollView>
    </View>
  );
};
export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  scrollView: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
