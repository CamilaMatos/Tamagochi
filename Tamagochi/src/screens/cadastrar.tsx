import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import axios from 'axios';


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
    textLink: {
        fontSize: 10,
        color: '#004cff',
        textAlign: 'center',
        marginBottom: 10,
    },
});



const Cadastrar = ({navigation}: any) => {
    const [email, setEmail] = useState<string>();
    const [senha, setSenha] = useState<string>();
    const [cSenha, setCSenha] = useState<string>();
    const onPress = () => {navigation.navigate('Login')};
 
    const submit = async () => {
        try {
            const postToSubmit = {
                email: email,
                password: senha,
            };
            const response = await axios.post('https://tamagochiapi-clpsampedro.b4a.run/register/', postToSubmit);
            console.log(response.data);
            navigation.navigate('Login');
        } catch(error) {
            console.error(error)
        }
    }

    const onChangeInputEmail = (value:string) => {
            setEmail(value);
    };
    const onChangeInputSenha = (value:string) => {
            setSenha(value);

    };
    const onChangeInputCSenha = (value:string) => {
            setCSenha(value);
    }

    return (
        <SafeAreaView style={style.container}>
            <ScrollView>
            <Header />
            <Text style={style.texto}>Bem-vindo (a) ao Chibi Hunter</Text>
            <Text style={style.titulo}>Crie sua conta!</Text>
            <TextInput 
            style={style.input}
            value={email} 
            onChangeText={onChangeInputEmail}
            placeholder="E-mail"
            />
            <TextInput 
            style={style.input} 
            value={senha} 
            onChangeText={onChangeInputSenha}
            placeholder="Senha"
            />
            <TextInput 
            style={style.input} 
            value={cSenha} 
            onChangeText={onChangeInputCSenha}
            placeholder="Confirmação de senha"
            />
            <TouchableOpacity  onPress={onPress}>
                    <Text style={style.textLink}>Já possu uma conta? clique aqui para logar</Text>
            </TouchableOpacity>
            <View style={style.botao}>
                <TouchableOpacity  onPress={submit}>
                    <Text style={style.textoBotao}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Cadastrar;