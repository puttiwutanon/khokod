import { View, Text, TouchableOpacity } from 'react-native'
import { useState, useEffect } from 'react'
import { styles } from '../../styles'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import Sidebar from '../sidebar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Calendar } from 'react-native-calendars'
import {LocaleConfig} from 'react-native-calendars';

const SERVER_URL = 'http://10.0.2.2:5000';

const MOODS = [
  { key: 'happy', label: '😊 มีความสุข', color: '#81C784' },
  { key: 'normal', label: '😐 ปกติ', color: '#FFD54F' },
  { key: 'down', label: '😢 เศร้า', color: '#64B5F6' },
  { key: 'angry', label: '😡 โกรธ', color: '#E57373' },
];

LocaleConfig.locales['th'] = {
  monthNames: ['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'],
  monthNamesShort: ['ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'],
  dayNames: ['อาทิตย์','จันทร์','อังคาร','พุธ','พฤหัสบดี','ศุกร์','เสาร์'],
  dayNamesShort: ['อา.','จ.','อ.','พ.','พฤ.','ศ.','ส.'],
};

LocaleConfig.defaultLocale = 'th';

const MoodCalendar = ({ navigation, sidebarVisible, setSidebarVisible }) => {
  const userId = 'testUser123';
  const [markedDates, setMarkedDates] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [showMoodPicker, setShowMoodPicker] = useState(false);
  const [moodSummary, setMoodSummary] = useState({ happy: 0, normal: 0, down: 0, angry: 0 });

useEffect(() => {
    loadMoods();
  }, []);

  const loadMoods = async () => {
    try {
      const response = await fetch(`${SERVER_URL}/api/moods/${userId}`);
      const data = await response.json();

      const dates = {};
      const summary = { happy: 0, normal: 0, down: 0, angry: 0 };

      Object.entries(data).forEach(([date, val]) => {
        const moodConfig = MOODS.find(m => m.key === val.mood);
        if (moodConfig) {
          dates[date] = {
            marked: true,
            dotColor: moodConfig.color,
          };
          summary[val.mood] = (summary[val.mood] || 0) + 1;
        }
      });

      setMarkedDates(dates);
      setMoodSummary(summary);
    } catch (err) {
      console.log('Failed to load moods:', err);
    }
  };

  const saveMood = async (mood) => {
    const moodConfig = MOODS.find(m => m.key === mood);

    try {
        const response = await fetch(`${SERVER_URL}/api/moods/save`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userId, date: selectedDate, mood }),
        });
        const data = await response.json();
        console.log('save response:', data);

      setMarkedDates(prev => ({
        ...prev,
        [selectedDate]: {
          marked: true,
          dotColor: moodConfig.color,
        }
      }));

      setMoodSummary(prev => ({
        ...prev,
        [mood]: prev[mood] + 1,
      }));

      setShowMoodPicker(false);
    } catch (err) {
      console.log('Failed to save mood:', err);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
          <View style={{ position: 'absolute',  left: 16, zIndex: 1001, marginTop: '15%' }}>
            <TouchableOpacity style={styles.chatLog} onPress={() => setSidebarVisible(true)}>
              <FontAwesome6 name="bars" size={30} color="#575757" />
            </TouchableOpacity>
          </View>

    <View style={{ flex: 1, padding: 15, marginTop: '15%' }}>
      <Calendar
        markedDates={{
          ...markedDates,
          ...(selectedDate && {
            [selectedDate]: {
              ...markedDates[selectedDate],
              selected: true,
              selectedColor: markedDates[selectedDate]?.dotColor || '#D4B5E8',
            }
          })
        }}
        onDayPress={(day) => {
          setSelectedDate(day.dateString);
          setShowMoodPicker(true);
        }}
        theme={{
          todayTextColor: '#D4B5E8',
          selectedDayBackgroundColor: '#D4B5E8',
          textDayFontFamily: 'Kanit',
          textMonthFontFamily: 'Kanit',
          textDayHeaderFontFamily: 'Kanit',
          textDayHeaderFontSize: 18,
          textDayFontSize: 16,
          textMonthFontSize: 24,
        }}
        firstDay={0}
      />

      {showMoodPicker && (
        <View style={{
          backgroundColor: '#fff',
          margin: 15,
          borderRadius: 16,
          padding: 15,
          elevation: 4,
        }}>
          <Text style={{ fontFamily: 'Kanit', fontSize: 18, marginBottom: 10 }}>
            วันที่ {selectedDate} รู้สึกยังไง?
          </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            {MOODS.map(mood => (
              <TouchableOpacity
                key={mood.key}
                onPress={() => saveMood(mood.key)}
                style={{
                  alignItems: 'center',
                  padding: 10,
                  borderRadius: 12,
                  backgroundColor: mood.color + '33',
                }}
              >
                <Text style={{ fontSize: 28 }}>{mood.label.split(' ')[0]}</Text>
                <Text style={{ fontFamily: 'Kanit', fontSize: 12 }}>
                  {mood.label.split(' ')[1]}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}

      <View style={{
        backgroundColor: '#fff',
        margin: 15,
        borderRadius: 16,
        padding: 15,
        elevation: 4,
      }}>
        <Text style={{ fontFamily: 'Kanit', fontSize: 18, marginBottom: 10 }}>สรุปอารมณ์</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          {MOODS.map(mood => (
            <View key={mood.key} style={{ alignItems: 'center' }}>
              <Text style={{ fontSize: 24 }}>{mood.label.split(' ')[0]}</Text>
              <Text style={{ fontFamily: 'Kanit', fontSize: 16, color: mood.color }}>
                {moodSummary[mood.key]} วัน
              </Text>
            </View>
          ))}
        </View>
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

export default MoodCalendar