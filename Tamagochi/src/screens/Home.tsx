import React from 'react';
import {Text, SafeAreaView, ImageBackground, StyleSheet, TouchableOpacity, Image, View} from 'react-native';
import user from "../stores/user";

const style = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      
  },
  botao: {
    backgroundColor: '#fff',
    width: 130,
    height: 50,
    borderRadius: 10,
    margin: 10,
},
textoB: {
  color: '#0c2733',
  fontSize: 15,
  textAlign: 'center',
  marginTop: 10,
},
texto: {
  color: '#0c2733',
  backgroundColor: '#fff',
  opacity: 0.7,
  fontSize: 15,
  textAlign: 'center',
  marginTop: 10,
  marginBottom: 50,
  width: 400,
  height: 40,
  paddingTop: 5,
},
titulo: {
  color: '#fff',
  fontSize: 45,
  textAlign: 'center',
  fontWeight: 'bold',
  marginBottom: 45,
  marginTop: 5,
},
imagem: {
  width: 410,
  height: 840,
  alignItems: 'center',
},
linhaVoltar: {
  flexDirection: 'row', 
  justifyContent: 'flex-start', 
  width: 350,
  margin: 10,
},
voltar: {
  width: 35,
  height: 35,
  marginTop: 10,
},
botoes: {
  flexDirection: 'row',
  marginTop: 20,
}
});


const Home = ({route, navigation} : any) => {
  const onPress1 = () => {navigation.navigate('CriarPet')};
  const onPress2 = () => {navigation.navigate('Listar')};
  const voltar = () => {navigation.navigate('Login')};

  return (
    <SafeAreaView style={style.container}>
      <ImageBackground
        source={require('../assets/home.png')} resizeMode="cover"   
        style={style.imagem}
      >
      <TouchableOpacity  onPress={voltar} style={style.linhaVoltar}>
          <Image source={require('../assets/voltarb.png')} style={style.voltar}/>
      </TouchableOpacity>
        <Text style={style.titulo}>Bem-vindo(a) de volta</Text>
        <Text style={style.texto}>Seus Chibis estavam com saudade!</Text>
        <View style={style.botoes}>
          <TouchableOpacity style={style.botao} onPress={onPress1}>
              <Text style={style.textoB}>Novo Chibi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.botao} onPress={onPress2}>
              <Text style={style.textoB}>Listar Chibis</Text>
          </TouchableOpacity>
        </View>
        </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;