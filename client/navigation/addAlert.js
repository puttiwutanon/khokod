import { View, Text, TextInput, TouchableOpacity, Animated } from 'react-native'
import {useEffect, useState} from 'react'
import { styles } from '../styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import { SafeAreaView } from 'react-native-safe-area-context'

const AddAlert = ({ onCancel }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDetail, setTaskDetail] = useState('');
  const [time, setTime] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return `${hours}:${minutes} ${period}`;
  };

  return (
    <SafeAreaView>
      <View style={styles.centeredWrapper}>
        <View style={styles.addTaskcontainer}>
          <View style={styles.taskContainer01}>
            <View>
              <Text style={{ fontFamily: 'Kanit', fontSize: 24 }}>ชื่อยา</Text>
              <TextInput placeholder="ชื่อยา" style={styles.inputContainer01} value={taskName} onChangeText={setTaskName} />
            </View>
            <View>
              <Text style={{ fontFamily: 'Kanit', fontSize: 20 }}>ข้อมูล</Text>
              <TextInput placeholder="ข้อมูลยา" style={styles.inputContainer01} value={taskDetail} onChangeText={setTaskDetail} />
            </View>
          </View>

          <View style={styles.taskContainer02}>
            <View>
              <Text style={{ fontFamily: 'Kanit', fontSize: 20 }}>เวลา</Text>
              <TouchableOpacity 
                style={styles.inputContainer01} 
                onPress={() => setShowPicker(true)}
              >
                <Text style={{ fontFamily: 'Kanit', fontSize: 16 }}>{formatTime(time)}</Text>
              </TouchableOpacity>

              {showPicker && (
                <DateTimePicker
                  value={time}
                  mode="time"
                  display="spinner"
                  onChange={(event, selectedTime) => {
                    setShowPicker(false);
                    if (selectedTime) setTime(selectedTime);
                  }}
                />
              )}
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.AddCancelbutton} onPress={() => alert('ยังไม่พร้อมใช้งาน')}>
              <Text style={styles.buttonText}>เพิ่ม</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.AddCancelbutton} onPress={onCancel}>
              <Text style={styles.buttonText}>ยกเลิก</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default AddAlert