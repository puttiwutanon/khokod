import { View, Text, TextInput, TouchableOpacity, Animated, ScrollView } from 'react-native'
import {useEffect, useState} from 'react'
import { styles } from '../../styles'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Sidebar from '../sidebar';
import TherapistSearchbar from '../therapistSearchbar'
import { SafeAreaView } from 'react-native-safe-area-context';

const TherapistSearch = ({ navigation, sidebarVisible, setSidebarVisible }) => {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ 
          flexDirection: 'row', 
          alignItems: 'center', 
          paddingRight: '5%',
          marginTop: '-13%',
        }}>
          <TouchableOpacity style={styles.chatLog} onPress={() => setSidebarVisible(true)}>
            <FontAwesome6 name="bars" size={30} color="#575757" />
          </TouchableOpacity>
          <View style={{ flex: 1 }}>
            <TherapistSearchbar />
          </View>
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

export default TherapistSearch