import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import icons from '@/constants/icons';
import images from '@/constants/images';
import { settings } from '@/constants/data';

const SettingsItem = ({
  icon,
  title,
  onPress,
  textStyle,
  showArrow = true,
}: {
  icon: ImageSourcePropType;
  title: string;
  onPress?: () => void;
  textStyle?: string;
  showArrow?: boolean;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className='flex flex-row items-center justify-between py-3'
    >
      <View className='flex flex-row items-center gap-3'>
        <Image source={icon} className='size-6' />
        <Text
          className={`text-lg font-rubik-medium text-black-300 ${textStyle}`}
        >
          {title}
        </Text>
      </View>

      {showArrow && <Image source={icons.rightArrow} className='size-5' />}
    </TouchableOpacity>
  );
};

const Profile = () => {
  const onLogout = () => {};

  return (
    <SafeAreaView className='h-full bg-white'>
      <ScrollView contentContainerClassName='px-7 pb-24'>
        <View className='flex flex-row items-center justify-between mt-5'>
          <Text className='text-xl font-rubik-bold'>Profile</Text>
          <Image source={icons.bell} className='size-5' />
        </View>

        <View className='flex flex-row justify-center mt-5'>
          <View className='flex flex-col items-center mt-5'>
            <View className='relative'>
              <Image
                source={images.avatar}
                className='relative rounded-full size-44'
              />
              <TouchableOpacity className='absolute bottom-0 right-3'>
                <Image source={icons.edit} className='size-9' />
              </TouchableOpacity>
            </View>

            <Text className='mt-2 text-2xl font-rubik-bold'>
              Ginger Suryabanshi
            </Text>
          </View>
        </View>

        <View className='flex flex-col mt-10'>
          <SettingsItem icon={icons.calendar} title='My Bookings' />
          <SettingsItem icon={icons.wallet} title='Payments' />
        </View>

        <View className='flex flex-col pt-5 mt-5 border-t border-primary-200'>
          {settings.slice(2).map((setting) => (
            <SettingsItem key={setting.title} {...setting} />
          ))}
        </View>

        <View className='flex flex-col pt-5 mt-5 border-t border-primary-200'>
          <SettingsItem
            icon={icons.logout}
            title='Logout'
            textStyle='text-danger'
            showArrow={false}
            onPress={onLogout}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
