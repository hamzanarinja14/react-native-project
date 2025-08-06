import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router, useNavigation } from 'expo-router';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Footer from './footer';


export default function DashboardScreen() {
  const [query, setQuery] = useState('');
  const navigation = useNavigation();
   const [username, setUsername] = useState('');
  useLayoutEffect(() => {
    navigation.setOptions({
      tabBarStyle: { display: 'none' },
    });
  }, [navigation]);

    useEffect(() => {
    const getName = async () => {
      try {
        const data = await AsyncStorage.getItem('signupData');
        if (data !== null) {
          const parsedData = JSON.parse(data);
          setUsername(parsedData.name);
        }
      } catch (error) {
        console.error('Error getting name:', error);
      }
    };

    getName(); // call on mount
  }, []);

  return (
    <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.heading}>
          Welcome back, {username}!
        </ThemedText>

        <View style={styles.searchContainer}>
      <Ionicons name="search" size={20} color="#888" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search products..."
        value={query}
        onChangeText={text => setQuery(text)}
        placeholderTextColor="#888"
      />
    </View>

    <ScrollView contentContainerStyle={styles.scroll}>
      <Text style={styles.subHeading}>Your Products</Text>
    <View style={{ gap: 12 }}>
      {[
        { id: 1, name: 'Blue T-shirt', stock: 12, icon: 'shirt' },
        { id: 2, name: 'Red Hoodie', stock: 5, icon: 'shirt-outline' },
        { id: 3, name: 'Black Hoodie', stock: 24, icon: 'shirt' },
        { id: 4, name: 'Green Hoodie', stock: 44, icon: 'shirt-outline' },
        { id: 5, name: 'Pink Hoodie', stock: 9, icon: 'shirt' },
        { id: 6, name: 'Sneakers', stock: 21, icon: 'walk' },
        { id: 7, name: 'White Sneakers', stock: 11, icon: 'walk-outline' },
        { id: 8, name: 'Red Sneakers', stock: 18, icon: 'walk' },
      ].map((product) => (
        <View
        key={product.id}
        style={{
          backgroundColor: '#fff',
          borderRadius: 14,
          padding: 18,
          flexDirection: 'row',
          alignItems: 'center',
          elevation: 3,
          shadowColor: '#0EA5E9',
          shadowOpacity: 0.08,
          shadowRadius: 8,
          shadowOffset: { width: 0, height: 2 },
        }}
        >
        <View
          style={{
            backgroundColor: '#E0F2FE',
            borderRadius: 8,
            padding: 10,
            marginRight: 16,
          }}
        >
          <Ionicons name={product.icon as any} size={28} color="#0EA5E9" />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: '700', fontSize: 17, color: '#0EA5E9' }}>
            {product.name}
          </Text>
          <Text style={{ color: '#888', fontSize: 14, marginTop: 2 }}>
            Stock: <Text style={{ color: '#0EA5E9', fontWeight: '600' }}>{product.stock}</Text>
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#F0F9FF',
            borderRadius: 8,
            padding: 8,
          }}
          onPress={() => router.push(`/edit-product/${product.id}`)}
        >
          <Ionicons name="create-outline" size={22} color="#3B82F6" />
        </TouchableOpacity>
        </View>
      ))}
    </View>
    </ScrollView>
      <Footer navigation={navigation} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F9FF',
    padding: 16,
  },
  scroll: {
    paddingBottom: 60,
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
    textAlign: 'center',
    marginTop: 25,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 16,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#E0F2FE',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0EA5E9',
  },
  statLabel: {
    marginTop: 8,
    fontSize: 14,
    color: '#0369A1',
  },
  actions: {
    gap: 12,
    marginTop: 8,
  },
  actionButton: {
    backgroundColor: '#3B82F6',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
 searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
    elevation: 2,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#111827',
  },
});
