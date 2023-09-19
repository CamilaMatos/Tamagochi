import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
      width: 300,
      height: 300,
      margin: 5,
  },
});

const Header = () => {
  return (
    <View>
      <Image 
        source={require('../assets/logo.gif')}  
        style={style.container}
    />
    </View>
  );
};

export default Header;