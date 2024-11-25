import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { Ionicons } from '@expo/vector-icons';

enum SignInType {
  Phone,
  Email,
  Google,
  Apple,
}

const SignUpPage = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const onSignIn = (type: SignInType) => {};

  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.header}>Welcome back</Text>
      <Text style={defaultStyles.descriptionText}>
        Enter the phone number associated with your account
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Country code'
          placeholderTextColor={Colors.gray}
          value='+977'
        />
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder='Mobile number'
          placeholderTextColor={Colors.gray}
          keyboardType='numeric'
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>

      <TouchableOpacity
        style={[
          defaultStyles.pillButton,
          phoneNumber !== '' ? styles.enabled : styles.disabled,
          { marginBottom: 20 },
        ]}
        onPress={() => onSignIn(SignInType.Phone)}
      >
        <Text style={defaultStyles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
        <View
          style={{
            height: StyleSheet.hairlineWidth,
            backgroundColor: Colors.gray,
            width: 160,
          }}
        />
        <Text style={{ color: Colors.gray, fontSize: 20 }}>or</Text>
        <View
          style={{
            // flex: 1,
            height: StyleSheet.hairlineWidth,
            backgroundColor: Colors.gray,
            width: 160,
          }}
        />
      </View>

      <TouchableOpacity
        onPress={() => onSignIn(SignInType.Email)}
        style={[
          defaultStyles.pillButton,
          {
            flexDirection: 'row',
            gap: 16,
            marginTop: 20,
            backgroundColor: '#fff',
          },
        ]}
      >
        <Ionicons name='mail' size={24} color={'#000'} />
        <Text style={[defaultStyles.buttonText, { color: '#000' }]}>
          Continue with email{' '}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onSignIn(SignInType.Google)}
        style={[
          defaultStyles.pillButton,
          {
            flexDirection: 'row',
            gap: 16,
            marginTop: 20,
            backgroundColor: '#fff',
          },
        ]}
      >
        <Ionicons name='logo-google' size={24} color={'#000'} />
        <Text style={[defaultStyles.buttonText, { color: '#000' }]}>
          Continue with email{' '}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onSignIn(SignInType.Apple)}
        style={[
          defaultStyles.pillButton,
          {
            flexDirection: 'row',
            gap: 16,
            marginTop: 20,
            backgroundColor: '#fff',
          },
        ]}
      >
        <Ionicons name='logo-apple' size={24} color={'#000'} />
        <Text style={[defaultStyles.buttonText, { color: '#000' }]}>
          Continue with email{' '}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    marginVertical: 40,
  },
  input: {
    backgroundColor: Colors.lightGray,
    padding: 20,
    borderRadius: 16,
    fontSize: 20,
    marginRight: 10,
  },
  enabled: {
    backgroundColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.primaryMuted,
  },
});

export default SignUpPage;
