import { View, Text, TextInput, TouchableOpacity, Animated, ScrollView } from 'react-native'
import {useEffect, useState} from 'react'
import { styles } from '../../styles'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Sidebar from '../sidebar';
import TherapistSearchbar from '../therapistSearchbar'
import { SafeAreaView } from 'react-native-safe-area-context';

const TherapistTest = ({ navigation, sidebarVisible, setSidebarVisible }) => {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
          <View style={{ position: 'absolute',  left: 16, zIndex: 1001, marginTop: '15%' }}>
            <TouchableOpacity style={styles.chatLog} onPress={() => setSidebarVisible(true)}>
              <FontAwesome6 name="bars" size={30} color="#575757" />
            </TouchableOpacity>
          </View>


      </SafeAreaView>

      <Sidebar
          isVisible={sidebarVisible}
          onClose={() => setSidebarVisible(false)}
          navigation={navigation}
      />      
    </View>
  )
}

export default TherapistTest