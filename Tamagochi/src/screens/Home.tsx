import React from 'react';
import {Text, SafeAreaView, View, StyleSheet, TouchableOpacity} from 'react-native';

const style = StyleSheet.create({
  container: {
      backgroundColor: '#FFF',
      padding: 10,
  },
  texto: {
    color: '#000',
    fontSize: 20,
  },
  botao: {
    backgroundColor: '#0c7a02',
    width: 140,
    height: 50,
    borderRadius: 10,
    margin: 10,
},
textoB: {
  color: '#ffff',
  fontSize: 15,
  textAlign: 'center',
  marginTop: 10,
},
});


const Home = ({route, navigation} : any) => {
  const {email} = route.params;
  const onPress1 = () => {navigation.navigate('CriarPet')};
  const onPress2 = () => {navigation.navigate('Listar')};
  console.log();
  return (
    <SafeAreaView>
      <View style={style.container}>
          <Text style={style.texto}>Bem-vindo(a) de volta {(email.email)}</Text>
          <TouchableOpacity style={style.botao} onPress={onPress1}>
              <Text style={style.textoB}>Criar Pet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.botao} onPress={onPress2}>
              <Text style={style.textoB}>Listar Pets</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;