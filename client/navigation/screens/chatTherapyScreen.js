import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import {useEffect, useState} from 'react'
import { styles } from '../../styles'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Sidebar from '../sidebar';
import MainChat from '../mainChat';

const ChatTherapyScreen = ({ navigation, sidebarVisible, setSidebarVisible }) => {

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.chatHeader}>
          <TouchableOpacity style={styles.chatLog} onPress={() => setSidebarVisible(true)}>
            <FontAwesome6 name="bars" size={30} color="#575757" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.newchat}>
            <FontAwesome6 name="pen-to-square" size={30} color="#575757" />
          </TouchableOpacity>

        </View>

        <MainChat/>
      </SafeAreaView>

      <Sidebar
          isVisible={sidebarVisible}
          onClose={() => setSidebarVisible(false)}
          navigation={navigation}
      />
    </View>

  )
}

export default ChatTherapyScreen