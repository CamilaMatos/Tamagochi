import React, { useState } from "react";
import { TouchableOpacity, SafeAreaView, StyleSheet, Text, TextInput, View, ScrollView, Alert, Image } from "react-native";
import Header from "../components/Header";
import axios from '../axios.config';
import user from "../stores/user";




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
});

const Login = ({navigation}: any) => {
    const [email, setEmail] = useState<string>();
    const [senha, setSenha] = useState<string>();
    const onPress = () => {navigation.navigate('Cadastrar')};
    const voltar = () => {navigation.navigate('BoasVindas')};

    const onChangeInput = (value:string) => {
        setEmail(value);
    };
    const onChangeInputSenha = (value:string) => {
        setSenha(value);
    };

    const store = user();
    

    const submit = async () => {
        try {
            const postToSubmit = {
                email: email,
                password: senha,
            };
            const response = await axios.post('/login', postToSubmit);
            store.setToken(response.data.token);
            console.log(response.data.token);
            redefinir();
            navigation.navigate('Home', {email:{email}});
        } catch(error) {
            Alert.alert('Erro', 'E-mail ou senha inválidos!', [
                {text: 'OK', onPress: () => redefinir()
            },]);
            }
    }

    const redefinir = () => {
        setEmail("");
        setSenha("");
    }
    
    return (
        <SafeAreaView style={style.container}>
            <TouchableOpacity  onPress={voltar} style={style.linhaVoltar}>
                <Image source={require('../assets/voltarv.png')} style={style.voltar}/>
            </TouchableOpacity>
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
            secureTextEntry={true}
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