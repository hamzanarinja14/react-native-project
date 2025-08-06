import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router, useNavigation } from 'expo-router';
import { useLayoutEffect } from 'react';

export default function HomeScreen() {

  const navigation = useNavigation();
   useLayoutEffect(() => {
    navigation.setOptions({
      tabBarStyle: { display: 'none' },
    });
  }, [navigation]);
  
  return (
    <ThemedView style={styles.container}>
      {/* 👋 Welcome Title */}
      <ThemedView style={styles.header}>
        <ThemedText type="title" style={styles.title}>
          Welcome Seller!
        </ThemedText>
        <HelloWave />
          <ThemedText type="title" style={styles.text}>
          Your Digital Shop To Boost Your Business
        </ThemedText>
      </ThemedView>

      {/* 🚪 Buttons */}
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.buttonPrimary} onPress={() => router.push('/login')}>
          <Text style={styles.buttonText}>Become a seller</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSecondary} onPress={() => router.push('/login')}>
          <Text style={styles.buttonText}>Become a dealz seller</Text>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#E0F7FA',
    padding: 24,

  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
     backgroundColor: '#E0F7FA',

  },
    text: {
    marginBottom: 8,
    fontSize: 28,
    backgroundColor: '#E0F7FA',
    textAlign: 'center',
  },
  title: {
    marginBottom: 8,
    fontSize: 28,
    backgroundColor: '#E0F7FA',
  },
  buttonWrapper: {
    flexDirection: 'column',
    gap: 16,
    alignItems: 'center',
    marginBottom: 40,
  },
  buttonPrimary: {
    backgroundColor: '#3B82F6',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 12,
    width: '80%',
    alignItems: 'center',
  },
  buttonSecondary: {
    backgroundColor: '#10B981',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 12,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  infoSection: {
    padding: 16,
    backgroundColor: '#E0F7FA',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
});
