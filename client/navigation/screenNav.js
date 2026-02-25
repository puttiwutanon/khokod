import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles';
import ChatTherapyScreen from './screens/chatTherapyScreen';
import MedAlertScreen from './screens/medAlertScreen';
import TherapistSearch from './screens/therapistSearch';
import TherapistTest from './screens/therapistTest';
import MoodCalendar from './screens/moodCalendar';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Foundation from '@expo/vector-icons/Foundation';

const Tab = createBottomTabNavigator();

const Navbar = ({ sidebarVisible, setSidebarVisible }) => {
  return (
  <Tab.Navigator
    initialRouteName="ChatTherapyScreen"  // add this
    screenOptions={{
      tabBarStyle: { display: 'none' },
      headerShown: false,
    }}
  >
      <Tab.Screen name="MedAlertScreen" options={{ headerShown: false }}>
        {(props) => (
          <MedAlertScreen 
            {...props} 
            sidebarVisible={sidebarVisible} 
            setSidebarVisible={setSidebarVisible} 
          />
        )}
      </Tab.Screen>

      <Tab.Screen name="ChatTherapyScreen" options={{ headerShown: false }}>
        {(props) => (
          <ChatTherapyScreen 
            {...props} 
            sidebarVisible={sidebarVisible} 
            setSidebarVisible={setSidebarVisible} 
          />
        )}
      </Tab.Screen>

      <Tab.Screen name="TherapistSearch" options={{ headerShown: false }}>
        {(props) => (
          <TherapistSearch 
            {...props} 
            sidebarVisible={sidebarVisible} 
            setSidebarVisible={setSidebarVisible} 
          />
        )}
      </Tab.Screen>

      <Tab.Screen name="TherapistTest" options={{ headerShown: false }}>
        {(props) => (
          <TherapistTest 
            {...props} 
            sidebarVisible={sidebarVisible} 
            setSidebarVisible={setSidebarVisible} 
          />
        )}
      </Tab.Screen>

      <Tab.Screen name="MoodCalendar" options={{ headerShown: false }}>
        {(props) => (
          <MoodCalendar 
            {...props} 
            sidebarVisible={sidebarVisible} 
            setSidebarVisible={setSidebarVisible} 
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};


export default Navbar;
