import React, { useEffect, useRef } from 'react';
import { Animated, TouchableOpacity, View } from 'react-native';
import ChatLogs from './chatLogs';
import NavButtons from './navButtons'; // we'll make this too

const Sidebar = ({ isVisible, onClose, navigation }) => {
  const slideAnim = useRef(new Animated.Value(-300)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isVisible ? 0 : -300,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isVisible]);

  if (!isVisible && slideAnim._value === -300) return null;

  return (
    <>
      {/* Backdrop */}
      {isVisible && (
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 999,
          }}
          onPress={onClose}
          activeOpacity={1}
        />
      )}

      {/* Sliding panel */}
      <Animated.View style={{
        position: 'absolute',
        top: 0, left: 0, bottom: 0,
        width: 300,
        backgroundColor: '#fff',
        zIndex: 1000,
        transform: [{ translateX: slideAnim }],
      }}>
        <ChatLogs />
        <NavButtons navigation={navigation} onClose={onClose} />
      </Animated.View>
    </>
  );
};

export default Sidebar;