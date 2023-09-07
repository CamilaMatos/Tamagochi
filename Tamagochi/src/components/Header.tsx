import React from 'react';
import {Image, View, StyleSheet} from 'react-native';


const Header = () => {
  return (
    <View>
      <Image 
        source={require('../assets/logo.gif')}  
        style={{width: 400, height: 400 }}
    />
    </View>
  );
};

export default Header;