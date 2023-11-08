import { ActivityIndicator, Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import axios from '../axios.config';
import { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import PetList from '../components/PetList';

const style = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        flex: 1,
    },
    quadro: {
        flexDirection: 'row',
        height: 150,
        width: 350,
        margin: 10,
        padding: 5,
        backgroundColor: '#d5dbd6',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000',
        justifyContent: 'space-between',
        alignItems: 'center',
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
        flexDirection: 'column',
        backgroundColor: '#ff0000',
        width: 30,
        height: 5,
        borderRadius: 30,
        marginBottom: 8,
        marginTop: 8,
        flex: 0.6,
    },
    textoBotao: {
        color: '#ffff',
        fontSize: 8,
        textAlign: 'center',
        marginTop: 5,
        fontWeight: 'bold',
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
    imagem: {
        width: 120,
        height: 125,
        borderRadius: 10,
        marginRight: 15,
    }
});


const Listar = ({navigation}: any) => {
    const onPress = () => {navigation.navigate('CriarPet')};

    const [pets, setPets] = useState();

    const getPet = useCallback(async () => {
        try {
            const {data} = await axios.get('/pets');
            console.log(data.pets);
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