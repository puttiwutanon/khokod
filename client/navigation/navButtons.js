import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Foundation from '@expo/vector-icons/Foundation';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { styles } from '../styles';

const NavButtons = ({ navigation, onClose }) => {
  const navigate = (screen) => {
    navigation.navigate(screen);
    onClose();
  };

  return (
    <View style={styles.navButtons}>
        
      <TouchableOpacity onPress={() => navigate('MedAlertScreen')} style={styles.newChat}>
        <Foundation name="alert" size={30} color="#575757" />
        <Text style={styles.newChatBar}>แจ้งเตือนกินยา</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigate('ChatTherapyScreen')} style={styles.newChat}>
        <FontAwesome name="commenting" size={30} color="#575757" />
        <Text style={styles.newChatBar}>แชท</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigate('TherapistSearch')} style={styles.newChat}>
        <FontAwesome name="search" size={30} color="#575757" />
        <Text style={styles.newChatBar}>ค้นหาจิตแพทย์</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigate('TherapistTest')} style={styles.newChat}>
        <FontAwesome6 name="file-circle-check" size={24} color="#575757" />
        <Text style={styles.newChatBar}>ทำแบบทดสอบ</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavButtons;