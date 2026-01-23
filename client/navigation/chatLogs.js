import { View, Text, TextInput, TouchableOpacity, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../styles';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const ChatLogs = ({ isVisible, onClose }) => {
  const slideAnim = useRef(new Animated.Value(-300)).current; // Start off-screen

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isVisible ? 0 : -300, // Slide to 0 or back to -300
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isVisible]);

  if (!isVisible && slideAnim._value === -300) return null;

  return (
    <>
      {/* Overlay/backdrop */}
      {isVisible && (
        <TouchableOpacity 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 999,
          }}
          onPress={onClose}
          activeOpacity={1}
        />
      )}
      
      {/* Sliding panel */}
      <Animated.View style={[
        styles.chatlogBar,
        {
          transform: [{ translateX: slideAnim }],
          zIndex: 1000,
        }
      ]}>
        <View style={styles.searchChat}>
          <FontAwesome6 name="magnifying-glass" size={24} color="black" style={styles.searchCharBar}/>
          <TextInput 
            placeholder="ค้นหาแชท"
            style={styles.searchCharBar} 
          />
        </View>

        <TouchableOpacity style={styles.newChat}>
            <FontAwesome6 name="pen-to-square" size={30} color="#575757" />
            <Text style={styles.newChatBar}>แชทใหม่</Text>
        </TouchableOpacity>
      </Animated.View>
    </>
  )
}

export default ChatLogs