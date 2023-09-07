import React, { useState } from "react";
import { TouchableOpacity, Button, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import Header from "../components/Header";


const style = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    texto: {
        color: '#787a7d',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10,
    },
    titulo: {
        color: '#0c7a02',
        fontSize: 45,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
        
    },
    input: {
        color: '#fff',
        height: 60,
        margin: 15,
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        backgroundColor: "#0c7a02",
        borderColor: "#000",
    },
    botao: {
        backgroundColor: '#0c7a02',
        width: 100,
        height: 50,
        borderRadius: 35,
        marginTop: 5,
        marginLeft: 160,
        marginBottom: 20,
    },
    textoBotao: {
        color: '#ffff',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10,
    },
});

const Login = ({navigation}: any) => {
    const [login, setLogin] = useState<string>();
    const [senha, setSenha] = useState<string>();
    const onPress = () => {navigation.navigate('Home', {nome:{login}})};

    const onChangeInput = (value:string) => {
        setLogin(value);
    };

    return (
        <SafeAreaView style={style.container}>
            <Header />
            <Text style={style.texto}>Bem-vindo (a) ao Tamagochi</Text>
            <Text style={style.titulo}>Chibi Hunter</Text>
            <TextInput 
            style={style.input} 
            value={login} 
            onChangeText={onChangeInput}
            placeholder="Login"
            />
            <TextInput 
            style={style.input} 
            value={senha} 
            onChangeText={onChangeInput}
            placeholder="Senha"
            />
            <View style={style.botao}>
                <TouchableOpacity  onPress={onPress}>
                    <Text style={style.textoBotao}>Entre</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Login;