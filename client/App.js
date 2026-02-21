import React, { useState, useEffect } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Navbar from './navigation/screenNav';
import { useFonts } from 'expo-font';

export default function App() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [fontsLoaded] = useFonts({
    Kanit: require('./assets/fonts/Kanit-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const Pastel = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#E8D5F2', 
    },
  };
  return (
    <NavigationContainer theme={Pastel}>
      <Navbar 
        sidebarVisible={sidebarVisible}
        setSidebarVisible={setSidebarVisible}
      />
    </NavigationContainer>
  );
}


