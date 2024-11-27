import { useState } from 'react';
import {
  Alert,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Link, useRouter } from 'expo-router';
import { isClerkAPIResponseError, useSignUp } from '@clerk/clerk-expo';

import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';

const SignUpPage = () => {
  const router = useRouter();
  const { signUp, isLoaded } = useSignUp();

  const [emailAddress, setEmailAddress] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onSignUp = async () => {
    if (!isLoaded) return;

    try {
      await signUp.create({
        emailAddress,
        password,
      });

      // Send the user an email with the verification code
      await signUp.prepareEmailAddressVerification({
        strategy: 'email_code',
      });

      router.push({
        pathname: '/verify/[phone]',
        params: { email: emailAddress },
      } as any);
    } catch (err) {
      console.log('error', JSON.stringify(err, null, 2));
      if (isClerkAPIResponseError(err)) {
        Alert.alert('Error', err.errors[0].message);
      }
    }
  };

  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.header}>Let's get Started</Text>
      <Text style={defaultStyles.descriptionText}>
        Enter your phone number. We will send you a confirmation code there
      </Text>

      <View
        style={[styles.inputContainer, { flexDirection: 'column', gap: 20 }]}
      >
        <TextInput
          placeholder='Email'
          placeholderTextColor={Colors.gray}
          value={emailAddress}
          onChangeText={setEmailAddress}
          style={styles.input}
          keyboardType='email-address'
        />
        <TextInput
          placeholder='Password'
          placeholderTextColor={Colors.gray}
          value={password}
          onChangeText={setPassword}
          style={styles.input}
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
          emailAddress && password ? styles.enabled : styles.disabled,
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
