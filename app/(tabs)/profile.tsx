import { ThemedView } from '@/components/ThemedView';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from 'expo-router';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Footer from './footer';

function InfoRow({ label, value }: { label: string; value: string }) {
    return (
        <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>{label}</Text>
            <Text style={styles.infoValue}>{value}</Text>
        </View>
    );
}

export default function ProfileScreen() {
    const navigation = useNavigation();
    const [data, setData] = useState<any>();

    useEffect(() => {
        const getName = async () => {
            try {
                const data = await AsyncStorage.getItem('signupData');
                if (data !== null) {
                    const parsedData = JSON.parse(data);
                    setData(parsedData);
                }
            } catch (error) {
                console.error('Error getting name:', error);
            }
        };
        getName();
    }, []);

    useLayoutEffect(() => {
        navigation.setOptions({
            tabBarStyle: { display: 'none' },
        });
    }, [navigation]);

    const name = data?.name || 'Ali Raza';
    const email = data?.email || 'AliRaza@gmail.com';
    const user = {
        name: name,
        email: email,
        phone: '+92 300 1234567',
        location: 'Lahore, Pakistan',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    };

    return (
        <ThemedView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.profileCard}>
                    <Image source={{ uri: user.avatar }} style={styles.avatar} />
                    <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.email}>{user.email}</Text>
                </View>
                <View style={styles.infoSection}>
                    <InfoRow label="Phone" value={user.phone} />
                    <InfoRow label="Location" value={user.location} />
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Edit Profile</Text>
                </TouchableOpacity>
            </ScrollView>
            <Footer navigation={navigation} />
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
        flexGrow: 1,
    },
    profileCard: {
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 24,
        borderRadius: 16,
        elevation: 3,
        width: '100%',
        marginBottom: 24,
        marginTop: 26,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 16,
        borderWidth: 2,
        borderColor: '#4f8cff',
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#222',
        marginBottom: 4,
    },
    email: {
        fontSize: 16,
        color: '#666',
        marginBottom: 8,
    },
    infoSection: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 24,
        elevation: 2,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    infoLabel: {
        fontWeight: '600',
        color: '#444',
    },
    infoValue: {
        color: '#666',
    },
    button: {
        backgroundColor: '#4f8cff',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
        alignItems: 'center',
        width: '100%',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    scroll: {
        paddingBottom: 24,
    },
});
