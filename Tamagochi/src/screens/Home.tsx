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
  const {nome} = route.params;
  console.log(nome);
  return (
    <SafeAreaView>
      <View style={style.container}>
          <Text style={style.texto}>Bem-vindo(a) de volta {(nome.login)}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;