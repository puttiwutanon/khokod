import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles';
import ChatTherapyScreen from './screens/chatTherapyScreen';
import MedAlertScreen from './screens/medAlertScreen';
import TherapistSearch from './screens/therapistSearch';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Foundation from '@expo/vector-icons/Foundation';

const Tab = createBottomTabNavigator();

const Navbar = () => {
  return (
    <Tab.Navigator
      initialRouteName="ChatTherapyScreen"
      screenOptions={{
        tabBarStyle: {
          ...styles.navbar,
          borderTopWidth: 0, 
          elevation: 0,      
          shadowOpacity: 0,  
        },
        tabBarActiveTintColor: '#d0cdcd',       
        tabBarInactiveTintColor: '#fff',  
        tabBarItemStyle: styles.tabBarItemStyle,
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="MedAlertScreen"
        component={MedAlertScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Foundation name="alert" size={30} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ChatTherapyScreen"
        component={ChatTherapyScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="commenting" size={30} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="TherapistSearch"
        component={TherapistSearch}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="search" size={30} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};


export default Navbar;
