import { View, TextInput, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import { styles } from '../styles'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'

const TherapistSearchbar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.threpistSearchbar}>
      <TextInput
        placeholder="ค้นหาจิตแพทย์ใกล้ตัวเลย ( /^ω^)/"
        style={{ fontFamily: 'Kanit', flex: 1 }}
        value={searchText}
        onChangeText={setSearchText}
        onSubmitEditing={() => onSearch(searchText)} // triggers on keyboard search press
      />
      <TouchableOpacity onPress={() => onSearch(searchText)}>
        <FontAwesome6 name="magnifying-glass" size={20} color="#575757" />
      </TouchableOpacity>
    </View>
  );
};

export default TherapistSearchbar