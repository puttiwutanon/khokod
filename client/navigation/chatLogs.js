import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../styles';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const ChatLogs = () => {
  return (
    <View>
      <View style={styles.searchChat}>
        <FontAwesome6 name="magnifying-glass" size={24} color="black" style={styles.searchCharBar} />
        <TextInput
          placeholder="ค้นหาแชท"
          style={styles.searchCharBar}
        />
      </View>

      <TouchableOpacity style={styles.newChat}>
        <FontAwesome6 name="pen-to-square" size={30} color="#575757" />
        <Text style={styles.newChatBar}>แชทใหม่</Text>
      </TouchableOpacity>

      <ScrollView style={styles.chatLogsList}>

      </ScrollView>
    </View>
  );
};

export default ChatLogs;