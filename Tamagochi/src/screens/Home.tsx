import React from 'react';
import {Text, SafeAreaView, View, StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
      backgroundColor: '#FFF',
      padding: 10,
  },
  texto: {
    color: '#000',
    fontSize: 20,
  },
});


const Home = ({route, navigation} : any) => {
  const {email} = route.params;
  console.log(email);
  return (
    <SafeAreaView>
      <View style={style.container}>
          <Text style={style.texto}>Bem-vindo(a) de volta {(email.email)}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;