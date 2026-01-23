import { View, Text, TextInput, TouchableOpacity, Animated, ScrollView } from 'react-native'
import {useEffect, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { styles } from '../../styles';

const MedAlertScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.medAlertList}>

      </ScrollView>
      <View style={styles.addAlert}>
        <TouchableOpacity style={styles.addAlertButton}>
          <FontAwesome6 name="plus" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default MedAlertScreen