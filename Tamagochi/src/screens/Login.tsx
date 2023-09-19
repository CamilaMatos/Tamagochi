import React, { useState } from "react";
import { TouchableOpacity, SafeAreaView, StyleSheet, Text, TextInput, View, ScrollView, Alert } from "react-native";
import Header from "../components/Header";
import axios from 'axios';


const style = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        flex: 1,
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
        marginBottom: 10,
    },
    textoBotao: {
        color: '#ffff',
        fontSize: 15,
        textAlign: 'center',
        paddingTop: 8,
    },
    textLink: {
        fontSize: 10,
        color: '#004cff',
        textAlign: 'center',
        marginBottom: 10,
    },
});

const Login = ({navigation}: any) => {
    const [email, setEmail] = useState<string>();
    const [senha, setSenha] = useState<string>();
    const onPress = () => {navigation.navigate('Cadastrar')};

    const onChangeInput = (value:string) => {
        setEmail(value);
    };
    const onChangeInputSenha = (value:string) => {
        setSenha(value);
    };

    const submit = async () => {
        try {
            const postToSubmit = {
                email: email,
                password: senha,
            };
            const response = await axios.post('https://tamagochiapi-clpsampedro.b4a.run/login/', postToSubmit);
            console.log(response);
            navigation.navigate('Home', {email:{email}});
        } catch(error) {
            Alert.alert('Erro', 'E-mail ou senha inválidos!', [
                
                {text: 'OK', onPress: () => console.log("Erro")},]);
            }
    }
    

    return (
        <SafeAreaView style={style.container}>
            <ScrollView>
            <Header />
            <Text style={style.texto}>Bem-vindo (a) ao Chibi Hunter</Text>
            <Text style={style.titulo}>Entre na sua conta!</Text>
            <TextInput 
            style={style.input} 
            value={email} 
            onChangeText={onChangeInput}
            placeholder="E-mail"
            />
            <TextInput 
            style={style.input} 
            value={senha} 
            onChangeText={onChangeInputSenha}
            placeholder="Senha"
            />
            <TouchableOpacity  onPress={onPress}>
                    <Text style={style.textLink}>Ainda não tem uma conta? clique aqui para se cadastrar</Text>
            </TouchableOpacity>
            
            </ScrollView>
            <View style={style.botao}>
                <TouchableOpacity onPress={submit}>
                    <Text style={style.textoBotao}>Entre</Text>
                </TouchableOpacity>
            </View>
            
        </SafeAreaView>
        
    );
    }

export default Login;