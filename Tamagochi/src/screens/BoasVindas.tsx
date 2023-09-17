import React, { useState } from "react";
import { TouchableOpacity, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import Header from "../components/Header";


const style = StyleSheet.create({
    texto: {
        color: '#ffff',
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
        height: 60,
        margin: 15,
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        backgroundColor: "#fff",
        borderColor: "#000",
        color: '#000',
    },
    botao: {
        backgroundColor: '#0c7a02',
        width: 140,
        height: 50,
        borderRadius: 10,
        margin: 10,
    },
    container: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
      },
      fixToText: {
        flexDirection: 'row',
        justifyContent: 'center',
      },
});

const BoasVindas = ({navigation}: any) => {
    const onPress1 = () => {navigation.navigate('Login')};
    const onPress2 = () => {navigation.navigate('Cadastrar')};

    return (
        <SafeAreaView style={style.container}>
            <View style={style.fixToText}>
                <Header />
            </View>
            <Text style={style.titulo}>Chibi Hunter</Text>
            <View style={style.fixToText}>
                <TouchableOpacity style={style.botao} onPress={onPress1}>
                    <Text style={style.texto}>Entre</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.botao} onPress={onPress2}>
                    <Text style={style.texto}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
            
        </SafeAreaView>
    );
};
    
    


export default BoasVindas;