import {StyleSheet, View} from 'react-native';
import {BORDERRADIUS, SPACING} from '../theme/theme';
import CustomIcon from './CustomIcon';

interface BGIconProps {
  name: string;
  color: string;
  size: number;
  backgroundColor: string;
}

const BGIcon = ({name, color, size, backgroundColor}: BGIconProps) => {
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <CustomIcon name={name} color={color} size={size} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: SPACING.space_30,
    width: SPACING.space_30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BORDERRADIUS.radius_8,
  },
});

export default BGIcon;
