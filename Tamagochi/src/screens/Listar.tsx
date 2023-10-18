import { ActivityIndicator, Alert, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import axios from '../axios.config';
import { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';

const style = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        flex: 1,
    },
    texto: {
        color: '#000',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10,
    },
    texto2: {
        color: '#000',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10,
        fontWeight: 'bold',
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
        width: 50,
        height: 25,
        borderRadius: 15,
        marginBottom: 2,
        flex: 0.6,
    },
    textoBotao: {
        color: '#ffff',
        fontSize: 8,
        textAlign: 'center',
        marginTop: 5,
    },
    textLink: {
        fontSize: 10,
        color: '#004cff',
        textAlign: 'center',
        marginBottom: 10,
    },
    botao2: {
        backgroundColor: '#0c7a02',
        width: 100,
        height: 50,
        borderRadius: 35,
        marginBottom: 10,
    },
    textoBotao2: {
        color: '#ffff',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10,
    },
});

type PetListProps = {
    list: {
        id: string,
        name:string,
    },
    getPet: () => void
}

const PetList = ({list, getPet}: PetListProps) => {

    const handleDelete = () => {
            Alert.alert('Excluir Pet', 'Tem certeza que quer deletar o pet?', [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel',},
                {text: 'OK', onPress: submit}
            ]
            )
                
    }

    const submit = async () => {
        
            try {
                await axios.delete(`/pet/${list.id}`);
                Alert.alert('Sucesso', 'Pet criado com sucesso!', [
                {text: 'OK', onPress: getPet},]);
            } catch(error) {
                Alert.alert('Erro', 'Informações Inválidas! Tente novamente.', [
                    {text: 'OK', onPress: () => console.log(error)},]);
            }
        } 

    return (
        <View style={{flexDirection: 'row', padding: 1,}}>
            <Text style={{fontWeight: 'bold', color: '#000', flex: 0.4}}>Id:</Text>
            <Text style={{color: '#000', flex: 0.6}}>{list.id}</Text>
            <Text style={{color: '#000', flex: 0.6}}> - </Text>
            <Text style={{fontWeight: 'bold', color: '#000', flex: 0.4}}>Nome:</Text>
            <Text style={{color: '#000', flex: 0.6}}>{list.name} </Text>
            <View style={style.botao}>
            <TouchableOpacity  onPress={handleDelete}>
                    <Text style={style.textoBotao}>Excluir</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const Listar = ({navigation}: any) => {
    const onPress = () => {navigation.navigate('CriarPet')};

    const [pets, setPets] = useState();

    const getPet = useCallback(async () => {
        try {
            const {data} = await axios.get('/pets',);
            console.log({data})
            setPets(data.pets);
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        getPet();
    }, []);

    return(
        <SafeAreaView style={style.container}>
            <Text style={style.texto}>
                <FlatList data={pets} renderItem={({item}) => <PetList list={item} getPet={getPet}/>} />
            </Text>
            <View style={style.botao2}>
                <TouchableOpacity  onPress={onPress}>
                    <Text style={style.textoBotao2}>Novo Pet</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Listar;