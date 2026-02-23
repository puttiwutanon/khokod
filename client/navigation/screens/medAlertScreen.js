import { View, Text, TextInput, TouchableOpacity, Animated, ScrollView } from 'react-native'
import {useEffect, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { styles } from '../../styles';
import Sidebar from '../sidebar';
import AddAlert from '../addAlert';

const MedAlertScreen = ({ navigation, sidebarVisible, setSidebarVisible }) => {
  
  const [showAddTask, setShowAddTask] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
          <View style={{ position: 'absolute',  left: 16, zIndex: 1001, marginTop: '15%' }}>
            <TouchableOpacity style={styles.chatLog} onPress={() => setSidebarVisible(true)}>
              <FontAwesome6 name="bars" size={30} color="#575757" />
            </TouchableOpacity>
          </View>

        {showAddTask && <AddAlert onCancel={() => setShowAddTask(false)} />}

        <ScrollView style={styles.medAlertList}>
          
        </ScrollView>

        

        {!showAddTask && (
          <View style={styles.addAlert}>
            <TouchableOpacity style={styles.addAlertButton} onPress={() => setShowAddTask(true)}>
              <FontAwesome6 name="plus" size={30} color="#fff" />
            </TouchableOpacity>
          </View>
        )}
      </SafeAreaView>

      <Sidebar
          isVisible={sidebarVisible}
          onClose={() => setSidebarVisible(false)}
          navigation={navigation}
      />      
    </View>
  )
}

export default MedAlertScreen