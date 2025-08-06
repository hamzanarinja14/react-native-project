import { router, useNavigation } from 'expo-router';
import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ForgotPasswordScreen() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const validate = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address');
        } else {
            setError('');
            console.log('Login successful');
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
            <Text style={styles.title}>Forgot Password</Text>

            <TextInput
                style={styles.input}
                placeholder="Enter your email"
                value={email}
                onChangeText={text => {
                    setEmail(text);
                    setError('');
                }}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            {error !== '' && <Text style={styles.error}>{error}</Text>}
            <TouchableOpacity style={styles.button} onPress={validate}>
                <Text style={styles.buttonText}>Reset Password</Text>
            </TouchableOpacity>

             <Text style={styles.text} onPress={() => router.push('/login')}>
                      Go To login page
                    </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E0F7FA',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#00796B',
        padding: 15,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    error: {
        color: 'red',
        marginBottom: 10,
        textAlign: 'left',
        alignSelf: 'flex-start',
    },
        text: {
    color: '#333',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});
