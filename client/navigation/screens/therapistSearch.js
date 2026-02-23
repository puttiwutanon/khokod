import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useState, useEffect } from 'react'
import * as Location from 'expo-location'
import { styles } from '../../styles'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import Sidebar from '../sidebar'
import TherapistSearchbar from '../therapistSearchbar'
import { SafeAreaView } from 'react-native-safe-area-context'

const SERVER_URL = 'http://10.0.2.2:5000';

const TherapistSearch = ({ navigation, sidebarVisible, setSidebarVisible }) => {
  const [location, setLocation] = useState(null);
  const [therapists, setTherapists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getLocationAndSearch();
  }, []);

  const getLocationAndSearch = async () => {
    setLoading(true);

    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setError('ไม่ได้รับอนุญาตให้เข้าถึงตำแหน่ง');
      setLoading(false);
      return;
    }

    const lat = 13.7563;
    const lng = 100.5018;
    await searchTherapists(lat, lng);
    setLoading(false);
  };

  const searchTherapists = async (lat, lng) => {
    try {
      const response = await fetch(
        `${SERVER_URL}/api/therapists/nearby?lat=${lat}&lng=${lng}`
      );
      const data = await response.json();
      console.log('therapists data:', data); // add this
      setTherapists(data);
    } catch (err) {
      console.log('error:', err); // add this
      setError('ไม่สามารถค้นหาได้');
    }
  };

  const geocodeAddress = async (address) => {
    try {
      const response = await fetch(
        `${SERVER_URL}/api/therapists/geocode?address=${encodeURIComponent(address)}`
      );
      const data = await response.json();
      return data;
    } catch (err) {
      setError('ไม่พบสถานที่');
      return null;
    }
  };

  const handleSearch = async (searchText) => {
    if (!searchText) return;
    setLoading(true);
    setError(null);

    const coords = await geocodeAddress(searchText);
    if (coords) {
      await searchTherapists(coords.lat, coords.lng);
    }
    setLoading(false);
  };


  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ 
          flexDirection: 'row', 
          alignItems: 'center', 
          paddingRight: '5%',
          marginTop: '3%',
        }}>
        <TouchableOpacity style={styles.chatLog} onPress={() => setSidebarVisible(true)}>
            <FontAwesome6 name="bars" size={30} color="#575757" />
          </TouchableOpacity>
          <View style={{ flex: 1, marginLeft: '3%' }}>
            <TherapistSearchbar onSearch={handleSearch} />
          </View>
        </View>

        {loading && (
          <ActivityIndicator size="large" color="#D4B5E8" style={{ marginTop: 20 }} />
        )}

        {error && (
          <Text style={{ fontFamily: 'Kanit', textAlign: 'center', marginTop: 20, color: 'red' }}>
            {error}
          </Text>
        )}

        <FlatList
          data={therapists}
          keyExtractor={(item) => item.place_id}
          style={{ marginTop: 10 }}
          renderItem={({ item }) => (
            <View style={{
              backgroundColor: '#fff',
              margin: 10,
              padding: 15,
              borderRadius: 12,
              elevation: 3,
            }}>
              <Text style={{ fontFamily: 'Kanit', fontSize: 18 }}>{item.name}</Text>
              <Text style={{ fontFamily: 'Kanit', fontSize: 14, color: '#575757' }}>{item.vicinity}</Text>
              {item.rating && (
                <Text style={{ fontFamily: 'Kanit', fontSize: 14, color: '#575757' }}>⭐ {item.rating}</Text>
              )}
              <Text style={{ fontFamily: 'Kanit', fontSize: 14, color: item.opening_hours?.open_now ? 'green' : 'red' }}>
                {item.opening_hours?.open_now ? 'เปิดอยู่' : 'ปิดแล้ว'}
              </Text>
            </View>
          )}
        />
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