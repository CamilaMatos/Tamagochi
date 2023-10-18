import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import BoasVindas from './src/screens/BoasVindas';
import Cadastrar from './src/screens/Cadastrar';
import CriarPet from './src/screens/CriarPet';
import Listar from './src/screens/Listar';
const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BoasVindas" component={BoasVindas}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Cadastrar" component={Cadastrar}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="CriarPet" component={CriarPet}/>
        <Stack.Screen name="Listar" component={Listar}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App