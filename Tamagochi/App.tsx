import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StyleSheet, Text} from "react-native";
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import BoasVindas from './src/screens/BoasVindas';
import Cadastrar from './src/screens/Cadastrar';
import CriarPet from './src/screens/CriarPet';
import Listar from './src/screens/Listar';
import Detalhes from './src/screens/Detalhes';
import Brincar from './src/screens/Brincar';
const Stack = createNativeStackNavigator();

const style = StyleSheet.create({
  tela: {
    backgroundColor: '#000'
  },
  titulo: {
    color: '#0c7a02',
    fontSize: 45,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
},
});

function nome(){
  return(
    <Text style={style.titulo}>Chibi Hunter</Text>
  )
}

function App(): JSX.Element {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="BoasVindas" component={BoasVindas} options={{headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false }}/>
        <Stack.Screen name="Cadastrar" component={Cadastrar} options={{headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false }}/>
        <Stack.Screen name="CriarPet" component={CriarPet} options={{headerShown: false }}/>
        <Stack.Screen name="Listar" component={Listar} options={{headerShown: false }}/>
        <Stack.Screen name="Detalhes" component={Detalhes} options={{headerShown: false }}/>
        <Stack.Screen name="Brincar" component={Brincar} options={{headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App