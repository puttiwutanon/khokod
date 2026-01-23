import { View, Text, ScrollView, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { styles } from '../styles';

const TherapistSearchbar = () => {
  return (
    <SafeAreaView>
        <View style={styles.threpistSearchbar}>
            <TextInput 
              placeholder="ค้นหาจิตแพทย์ใกล้ตัวเลย ( ﾉ^ω^)ﾉ"
              style={{marginLeft: '10', fontSize: 16, fontFamily: 'Kanit'}}
            />
            <FontAwesome6 name="magnifying-glass" size={30} color="black" style={styles.searchCharBar}/>
        </View>
    </SafeAreaView>
  )
}

export default TherapistSearchbar