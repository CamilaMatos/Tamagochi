import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import axios from '../axios.config';



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
        fontSize: 40,
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
        flex: 0.4,
        margin: 10,
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
    dois: {
        flexDirection: 'row', 
        
    },
});



const CriarPet = ({navigation}: any) => {
    const onPress = () => {navigation.navigate('Listar')};
    const [name, setName] = useState<string>();
 
    const submit = async () => {
        if(name=="") {
            Alert.alert('Erro', 'O nome não pode ficar em branco', [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel',},
            ]);
        } else{
            try {
                const postToSubmit = {
                    name: name,
                };
                await axios.post('/pet', postToSubmit);
                Alert.alert('Sucesso', 'Pet criado com sucesso!', [
                    {text: 'OK', onPress: () => console.log('Ok')},]);
            } catch(error) {
                Alert.alert('Erro', 'Informações Inválidas! Tente novamente.', [
                    {text: 'OK', onPress: () => console.log(error)},]);
            }
        } 
    }

    const onChangeInputname = (value:string) => {
            setName(value);
    };
    

    return (
        <SafeAreaView style={style.container}>
            <ScrollView>
            <Header />
            <Text style={style.texto}>Chibi Hunter</Text>
            <Text style={style.titulo}>Crie seu Pet!</Text>
            <TextInput 
            style={style.input}
            value={name} 
            onChangeText={onChangeInputname}
            placeholder="Nome"
            />
            </ScrollView>
            <View style={style.dois}>
            <View style={style.botao}>
                <TouchableOpacity  onPress={submit}>
                    <Text style={style.textoBotao}>Criar</Text>
                </TouchableOpacity>
            </View>
            <View style={style.botao}>
                <TouchableOpacity  onPress={onPress}>
                    <Text style={style.textoBotao}>Listar Pets</Text>
                </TouchableOpacity>
            </View>
            </View>
        </SafeAreaView>
    );
}

export default CriarPet;