import { Tabs } from 'expo-router';
import { View, Text, Image } from 'react-native';

import icons from '@/constants/icons';

const TabIcon = ({
  focused,
  icon,
  title,
}: {
  focused: boolean;
  icon: any;
  title: string;
}) => (
  <View className='flex flex-col items-center flex-1 mt-3'>
    <Image
      source={icon}
      tintColor={focused ? '#0061ff' : '#666876'}
      resizeMode='contain'
      className='size-6'
    />
    <Text
      className={`${
        focused
          ? 'text-primary-300 font-rubik-medium'
          : 'text-black-200 font-rubik'
      } text-xs w-full text-center mt-1`}
    >
      {title}
    </Text>
  </View>
);

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'white',
          borderTopColor: '#0061FF1A',
          borderTopWidth: 1,
          minHeight: 70,
        },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({ focused }) =>
            TabIcon({
              focused,
              icon: icons.home,
              title: 'Home',
            }),
        }}
      />
      <Tabs.Screen
        name='explore'
        options={{
          title: 'Explore',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.search} focused={focused} title='Explore' />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.person} focused={focused} title='Profile' />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;