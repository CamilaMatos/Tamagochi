import React, { useState } from "react";
import { TouchableOpacity, SafeAreaView, StyleSheet, Text, TextInput, View, Image, ImageBackground, useWindowDimensions } from "react-native";



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
        marginTop: 20,
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
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
        flex: 1,
      },
      fixToText: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 585,
      },
      imagem: {
        width: 400,
        height: 780,
      },
});

const BoasVindas = ({navigation}: any) => {
    const onPress1 = () => {navigation.navigate('Login')};
    const onPress2 = () => {navigation.navigate('Cadastrar')};

    return (
        <SafeAreaView style={style.container}>
            <ImageBackground source={require('../assets/logo.jpg')} resizeMode="cover" style={style.imagem}>
                <Text style={style.titulo}>Chibi Hunter</Text>
                <View style={style.fixToText}>
                    <TouchableOpacity style={style.botao} onPress={onPress1}>
                        <Text style={style.texto}>Entre</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.botao} onPress={onPress2}>
                        <Text style={style.texto}>Cadastre-se</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            
            
        </SafeAreaView>
    );
};
    
    


export default BoasVindas;