import {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {useStore} from '../store/useStore';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import CustomIcon from '../components/CustomIcon';
import {CoffeeData} from '../types';
import CoffeeCard from '../components/CoffeeCard';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

const getCategories = (data: CoffeeData[]) => {
  let temp: any = {};
  for (let i = 0; i < data.length; i++) {
    if (temp[data[i].name] === undefined) {
      temp[data[i].name] = 1;
    } else {
      temp[data[i].name]++;
    }
  }
  let categories = Object.keys(temp);
  categories.unshift('All');
  return categories;
};

const getCoffeeByCategory = (category: string, data: any) => {
  if (category === 'All') {
    return data;
  } else {
    let coffeelist = data.filter((item: any) => item.name === category);
    return coffeelist;
  }
};

const HomeScreen = ({navigation}: {navigation: any}) => {
  const coffee = useStore(store => store.coffee);
  const beans = useStore(store => store.beans);
  const addToCart = useStore(store => store.addToCart);
  const calculateCartPrice = useStore(store => store.calculateCartPrice);

  const tabBarHeight = useBottomTabBarHeight();

  const [searchText, setSearchText] = useState<string>('');
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState({
    index: 0,
    name: 'All',
  });
  const [categoryCoffee, setCategoryCoffee] = useState<CoffeeData[]>([]);

  const coffeeListRef = useRef<FlatList>(null);

  useEffect(() => {
    const coffeeCategories = getCategories(coffee);
    setCategories(coffeeCategories);
    const categorized = getCoffeeByCategory('All', coffee);
    setCategoryCoffee(categorized);
  }, [coffee]);

  const onCoffeeSearch = (search: string) => {
    if (!search) return;

    coffeeListRef.current?.scrollToOffset({
      animated: true,
      offset: 0,
    });

    setSelectedCategory({index: 0, name: 'All'});
    setCategoryCoffee([
      ...coffee.filter((item: any) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      ),
    ]);
  };

  const onResetSearch = () => {
    coffeeListRef.current?.scrollToOffset({
      animated: true,
      offset: 0,
    });
    setSelectedCategory({index: 0, name: 'All'});
    setCategoryCoffee([...coffee]);
    setSearchText('');
  };

  const onAddToCart = (data: CoffeeData) => {
    addToCart({
      id: data.id,
      index: data.index,
      name: data.name,
      roasted: data.roasted,
      imagelink_square: data.imagelink_square,
      special_ingredient: data.special_ingredient,
      type: data.type,
      prices: data.prices,
    });
    calculateCartPrice();
    ToastAndroid.showWithGravity(
      `${data.name} is added to cart`,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}>
        <HeaderBar />

        <Text style={styles.title}>Find the best{'\n'}coffee for you</Text>

        {/* SEARCH BAR */}
        <View style={styles.searchContainer}>
          <TouchableOpacity onPress={() => onCoffeeSearch(searchText)}>
            <CustomIcon
              name="search"
              size={FONTSIZE.size_18}
              style={styles.searchIcon}
              color={
                searchText
                  ? COLORS.primaryOrangeHex
                  : COLORS.primaryLightGreyHex
              }
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Search"
            placeholderTextColor={COLORS.primaryLightGreyHex}
            style={styles.searchInput}
            value={searchText}
            onChangeText={setSearchText}
          />
          {searchText && (
            <TouchableOpacity onPress={onResetSearch}>
              <CustomIcon
                name="close"
                size={FONTSIZE.size_16}
                color={COLORS.primaryLightGreyHex}
                style={styles.searchIcon}
              />
            </TouchableOpacity>
          )}
        </View>

        {/* CATEGORIES */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryScrollView}>
          {categories.map((category, index) => (
            <View key={`${category}-${index}`} style={styles.categoryContainer}>
              <TouchableOpacity
                style={styles.categoryItem}
                onPress={() => {
                  coffeeListRef.current?.scrollToOffset({
                    animated: true,
                    offset: 0,
                  });
                  setSelectedCategory({index, name: categories[index]});
                  setCategoryCoffee([
                    ...getCoffeeByCategory(categories[index], coffee),
                  ]);
                }}>
                <Text
                  style={[
                    styles.categoryText,
                    selectedCategory.index === index
                      ? {color: COLORS.primaryOrangeHex}
                      : {},
                  ]}>
                  {category}
                </Text>
                {selectedCategory.index === index && (
                  <View style={styles.categoryIndicator} />
                )}
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        {/* COFFEE */}
        <FlatList
          ref={coffeeListRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          data={categoryCoffee}
          contentContainerStyle={styles.flatlistContainer}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.push('Details', {
                  index: item.index,
                  id: item.id,
                  type: item.type,
                });
              }}>
              <CoffeeCard {...item} onAddToCart={() => onAddToCart(item)} />
            </TouchableOpacity>
          )}
        />

        {/* BEANS */}
        <Text style={styles.coffeeBeansTitle}>Coffee Beans</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          data={beans}
          contentContainerStyle={[
            styles.flatlistContainer,
            {marginBottom: tabBarHeight},
          ]}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.push('Details', {
                  index: item.index,
                  id: item.id,
                  type: item.type,
                });
              }}>
              <CoffeeCard {...item} onAddToCart={() => onAddToCart(item)} />
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primaryBlackHex,
    flex: 1,
  },
  scrollViewFlex: {
    flexGrow: 1,
  },
  title: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_28,
    color: COLORS.primaryWhiteHex,
    paddingLeft: SPACING.space_30,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: SPACING.space_30,
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.primaryDarkGreyHex,
  },
  searchIcon: {
    marginHorizontal: SPACING.space_20,
  },
  searchInput: {
    flex: 1,
    height: SPACING.space_20 * 2.8,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
    alignItems: 'center',
  },
  categoryScrollView: {
    paddingHorizontal: SPACING.space_20,
    marginBottom: SPACING.space_20,
  },
  categoryContainer: {
    paddingHorizontal: SPACING.space_15,
  },
  categoryItem: {
    alignItems: 'center',
  },
  categoryText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryLightGreyHex,
    marginBottom: SPACING.space_4,
  },
  categoryIndicator: {
    height: SPACING.space_10,
    width: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_10,
    backgroundColor: COLORS.primaryOrangeHex,
  },
  flatlistContainer: {
    gap: SPACING.space_20,
    paddingVertical: SPACING.space_20,
    paddingHorizontal: SPACING.space_30,
  },
  coffeeBeansTitle: {
    fontSize: FONTSIZE.size_18,
    marginLeft: SPACING.space_30,
    marginTop: SPACING.space_20,
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.secondaryLightGreyHex,
  },
});
