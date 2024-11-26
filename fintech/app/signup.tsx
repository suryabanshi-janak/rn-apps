import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const SignUpPage = () => {
  const router = useRouter();

  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const onSignUp = () => {
    const fullNumber = `+977${phoneNumber}`;

    try {
      router.push({
        pathname: '/verify/[phone]',
        params: { phone: fullNumber },
      });
    } catch (error) {}
  };

  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.header}>Let's get Started</Text>
      <Text style={defaultStyles.descriptionText}>
        Enter your phone number. We will send you a confirmation code there
      </Text>

      <View style={styles.inputContainer}>
        <TextInput value='+977' style={styles.input} />
        <TextInput
          placeholder='Mobile Number'
          placeholderTextColor={Colors.gray}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          style={[styles.input, { flex: 1 }]}
          keyboardType='numeric'
        />
      </View>

      <Link href='/login' replace asChild>
        <TouchableOpacity>
          <Text style={defaultStyles.textLink}>
            Already have an account? Log In
          </Text>
        </TouchableOpacity>
      </Link>

      <View style={{ flex: 1 }} />

      <TouchableOpacity
        style={[
          defaultStyles.pillButton,
          phoneNumber ? styles.enabled : styles.disabled,
          { marginBottom: 20 },
        ]}
        onPress={onSignUp}
      >
        <Text style={defaultStyles.buttonText}>Sign Up</Text>
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
