import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
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
    imagem: {
        width: 80,
        height: 100,
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
      deslogar: {
        width: 35,
        height: 35,
        marginTop: 10,
        marginLeft: 280,
      },
});



const CriarPet = ({navigation}: any) => {
    const voltar = () => {navigation.navigate('Home')};
    const onPress = () => {navigation.navigate('Listar')};
    const [name, setName] = useState<string>();
    
    const logout = () => {
        user.setState({ token: null });
        navigation.navigate('Login');
    };
 
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
                const resposta = await axios.post('/pet', postToSubmit);
                console.log(resposta.data.id);
                Alert.alert('Sucesso', 'Pet criado com sucesso!', [
                    {text: 'OK', onPress: () => setName("")},]);
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
            <View style={style.linhaVoltar}>
                <TouchableOpacity  onPress={voltar}>
                    <Image source={require('../assets/voltarv.png')} style={style.voltar}/>
                </TouchableOpacity>
                <TouchableOpacity  onPress={logout}>
                    <Image source={require('../assets/deslogar.png')} style={style.deslogar}/>
                </TouchableOpacity>
            </View>
            <ScrollView>
            <Header />
            <Text style={style.texto}>Chibi Hunter</Text>
            <Text style={style.titulo}>Crie seu Chibi!</Text>
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
                        <Text style={style.textoBotao}>Listar Chibis</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default CriarPet;