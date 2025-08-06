import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from 'expo-router';
import React, { useLayoutEffect, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Footer from './footer';


type Message = {
    id: string;
    text: string;
    sender: 'me' | 'other';
};

const ChatScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            tabBarStyle: { display: 'none' },
        });
    }, [navigation]);

    const [messages, setMessages] = useState<Message[]>([
        { id: '1', text: 'Talk to you later!', sender: 'me' },
        { id: '2', text: 'No problem 😊', sender: 'other' },
        { id: '3', text: 'Sure, thank you!', sender: 'me' },
        { id: '4', text: 'Let me know if you need any help.', sender: 'other' },
        { id: '5', text: 'Yeah, it is quite fun.', sender: 'me' },
        { id: '6', text: 'That sounds interesting!', sender: 'other' },
        { id: '7', text: 'Just working on a project.', sender: 'me' },
        { id: '8', text: 'What are you up to today?', sender: 'other' },
        { id: '9', text: 'I am doing well too.', sender: 'me' },
        { id: '10', text: 'I am good, thanks! How about you?', sender: 'other' },
        { id: '11', text: 'Hi, how are you?', sender: 'me' },
        { id: '12', text: 'Hello! 👋', sender: 'other' },
    ]);
    const [input, setInput] = useState('');

    const sendMessage = () => {
        if (input.trim() === '') return;
        setMessages([
            ...messages,
            { id: Date.now().toString(), text: input, sender: 'me' },
        ]);
        setInput('');
    };


    const renderItem = ({ item }: { item: Message }) => (
        <View
            style={[
                styles.messageContainer,
                item.sender === 'me' ? styles.myMessage : styles.otherMessage,
            ]}
        >
            <Text style={styles.messageText}>{item.text}</Text>
        </View>
    );

    return (
        <ThemedView style={styles.container}> 
             <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.container}>
            <FlatList
                data={messages}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={styles.messagesList}
                inverted
            />
          
        </View>
        </ScrollView>
          <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={input}
                    onChangeText={setInput}
                    placeholder="Type a message"
                />
                <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                    <Text style={{ color: '#fff' }}>Send</Text>
                </TouchableOpacity>
            </View>
      <Footer navigation={navigation} />

        </ThemedView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f4f4f8' },
    messagesList: { flex: 1, paddingHorizontal: 10 },
    messageContainer: {
        marginVertical: 4,
        maxWidth: '75%',
        borderRadius: 16,
        padding: 10,
        marginTop: 40,
    },
    myMessage: {
        backgroundColor: '#0078fe',
        alignSelf: 'flex-end',
    },
    otherMessage: {
        backgroundColor: '#e5e5ea',
        alignSelf: 'flex-start',
    },
    messageText: { color: '#222', fontSize: 16 },
    inputContainer: {
        flexDirection: 'row',
        padding: 8,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginBottom: 70,
    },
    input: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        borderRadius: 20,
        paddingHorizontal: 16,
        fontSize: 16,
        marginRight: 8,
    },
    sendButton: {
        backgroundColor: '#0078fe',
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    scroll: {
    paddingBottom: 24,
  },
});

export default ChatScreen;