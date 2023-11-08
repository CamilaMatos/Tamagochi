import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import axios from '../axios.config';
import { SafeAreaView } from "react-native-safe-area-context";

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
        width: 250,
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
        marginTop: 5,
    },
});

type EditarPetProps = {
    nome: any,
    id: string,
}


const EditarPet = ({nome, id}: EditarPetProps, {navigation}: any) => {
    const [name, setName] = useState<string>();

    const onChangeInputname = (value:string) => {
        setName(value);
};

    const onPress = () => {navigation.navigate('Listar')};

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
                await axios.put('/pet/'+id,postToSubmit);
                Alert.alert('Sucesso', 'Chibi editado com sucesso!', [
                    {text: 'OK', onPress: () => console.log('Ok')},]);
            } catch(error) {
                Alert.alert('Erro', 'Informações Inválidas! Tente novamente.', [
                    {text: 'OK', onPress: () => console.log(error)},]);
            }
        } 
    }

    return(
        <SafeAreaView style={style.container}>
            <Text style={style.texto}>Editar Chibi {nome}</Text>
            <TextInput 
            style={style.input}
            value={name} 
            onChangeText={onChangeInputname}
            placeholder="Nome"
            />
            <View style={style.botao}>
                <TouchableOpacity  onPress={submit}>
                    <Text style={style.textoBotao}>Finalizar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default EditarPet;