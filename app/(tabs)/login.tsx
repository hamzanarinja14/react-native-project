import { router, useNavigation } from 'expo-router';
import { useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  const [rememberMe, setRememberMe] = useState(false);
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [email, setEmail] = useState('');

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const validate = () => {
    let valid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      valid = false;
    } else {
      setEmailError('');
    }

    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      router.push('/dashboard');
    }
  };

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      tabBarStyle: { display: 'none' },
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      {emailError !== '' && <Text style={styles.error}>{emailError}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {passwordError !== '' && <Text style={styles.error}>{passwordError}</Text>}

      <View style={styles.rememberMeContainer}>
        <TouchableOpacity onPress={toggleRememberMe} style={styles.checkbox}>
          {rememberMe && <View style={styles.checked} />}
        </TouchableOpacity>
        <Text style={styles.rememberText}>Remember Me</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={validate}>
        <Text style={styles.buttonText} onPress={() => router.push('/dashboard')} >Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/forgot')}>
        <Text style={styles.forgotText}>Forgot_Password?</Text>
      </TouchableOpacity>


      <Text style={styles.footerText}>Don't have an account?  <Text style={styles.text} onPress={() => router.push('/signup')}>Sign up</Text>  </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FA', // light blue
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#00796B',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
  },
  footerText: {
    color: '#333',
    marginTop: 10,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#00796B',
    borderRadius: 4,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  checked: {
    width: 16,
    height: 16,
    backgroundColor: '#00796B',
    borderRadius: 2,
  },
  rememberText: {
    fontSize: 16,
    color: '#333',
  },
  text: {
    color: '#333',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  forgotText: {
    color: '#007bff',
    marginTop: 15,
    fontSize: 16,
  },
  error: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'left',
    alignSelf: 'flex-start',
  }

});
