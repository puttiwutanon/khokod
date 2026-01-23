import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import {useEffect, useState} from 'react'
import { styles } from '../../styles'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import ChatLogs from '../chatLogs';
import MainChat from '../mainChat';

const ChatTherapyScreen = () => {
  const[isChatLogVisible, setIsChatLogVisible] = useState(false)

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.chatHeader}>
        <TouchableOpacity style={styles.chatLog} onPress={() => setIsChatLogVisible(!isChatLogVisible)}>
          <FontAwesome6 name="bars" size={30} color="#575757" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.newchat}>
          <FontAwesome6 name="pen-to-square" size={30} color="#575757" />
        </TouchableOpacity>

      </View>
      <ChatLogs isVisible={isChatLogVisible} onClose={() => setIsChatLogVisible(false)} />

      <MainChat/>
    </SafeAreaView>
  )
}

export default ChatTherapyScreen