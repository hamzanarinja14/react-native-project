// components/Footer.tsx
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type FooterProps = {
  navigation: any; 
};

const Footer: React.FC<FooterProps> = ({ navigation }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.iconContainer} onPress={() => router.push('/dashboard')}>
        <MaterialIcons name="home" size={26} color="#333" />
        <Text style={styles.label}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer} onPress={() => router.push('/product')}>
        <MaterialIcons name="shopping-cart" size={26} color="#333" />
        <Text style={styles.label}>Productt</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer} onPress={() => router.push('/chat')}>
        <MaterialIcons name="chat" size={26} color="#333" />
        <Text style={styles.label}>Chat</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={() => router.push('/profile')}>
        <MaterialIcons name="settings" size={26} color="#333" />
        <Text style={styles.label}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute', 
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  iconContainer: {
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    color: '#333',
    marginTop: 2,
  },
});


export default Footer;
