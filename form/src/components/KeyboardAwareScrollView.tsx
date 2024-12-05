import { PropsWithChildren } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function KeyboardAwareScrollView({ children }: PropsWithChildren) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
      keyboardVerticalOffset={80}
    >
      <ScrollView
        style={{ backgroundColor: 'white' }}
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: 'white',
          padding: 10,
          gap: 5,
        }}
        keyboardShouldPersistTaps='handled'
      >
        <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
          {children}
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
export default KeyboardAwareScrollView;
