import { View, Text, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { styles } from '../styles';

const MainChat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = message;
    setMessage(''); // Clear input immediately
    
    // Add user message to chat
    setMessages(prev => [...prev, { type: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      // Replace with your actual server IP address
      // For Android emulator: use 10.0.2.2
      // For iOS simulator: use localhost
      // For physical device: use your computer's IP (e.g., 192.168.1.x)
      const response = await fetch('http://10.0.2.2:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: userMessage }),
      });

      const data = await response.json();
      
      console.log('Response from Gemini:', data);
      
      // Add AI response to chat
      setMessages(prev => [...prev, { type: 'ai', text: data.answer }]);
      
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, { 
        type: 'ai', 
        text: 'Sorry, there was an error connecting to the server.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView style={styles.mainChatArea}>
          {messages.map((msg, index) => (
            <View key={index} style={{
              padding: 10,
              margin: 5,
              backgroundColor: msg.type === 'user' ? '#DCF8C6' : '#E8E8E8',
              borderRadius: 10,
              alignSelf: msg.type === 'user' ? 'flex-end' : 'flex-start',
              maxWidth: '80%'
            }}>
              <Text style={{ fontFamily: 'Kanit' }}>{msg.text}</Text>
            </View>
          ))}
          {isLoading && (
            <Text style={{ padding: 10, fontFamily: 'Kanit' }}>กำลังคิด...</Text>
          )}
        </ScrollView>
        
        <View style={styles.mainChatInput}>
          <TextInput 
            placeholder="คุยกับขอกอดสิ ( ≧∀≦)"
            style={{ flex: 1, marginLeft: 10, fontSize: 16, fontFamily: 'Kanit' }}
            value={message}
            onChangeText={setMessage}
            onSubmitEditing={sendMessage}
          />
          <TouchableOpacity onPress={sendMessage} disabled={isLoading}>
            <FontAwesome6 
              name="paper-plane" 
              size={25} 
              color={isLoading ? "#CCCCCC" : "#575757"} 
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default MainChat