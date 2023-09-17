import React, { useState } from "react";
import { TouchableOpacity, SafeAreaView, StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
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
    const onPress1 = () => {navigation.navigate('Home', {nome:{email}})};
    const onPress2 = () => {navigation.navigate('Cadastrar')};

    const onChangeInput = (value:string) => {
        setEmail(value);
    };

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
            onChangeText={onChangeInput}
            placeholder="Senha"
            />
            <TouchableOpacity  onPress={onPress2}>
                    <Text style={style.textLink}>Ainda não tem uma conta? clique aqui para se cadastrar</Text>
            </TouchableOpacity>
            <View style={style.botao}>
                <TouchableOpacity  onPress={onPress1}>
                    <Text style={style.textoBotao}>Entre</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Login;