import { useCallback, useEffect, useState } from "react";
import { Alert, FlatList, Image, ImageBackground, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from '../axios.config';
import EditarPet from "../components/EditarPet";


const style = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        flex: 1,
    },
    texto: {
        color: '#787a7d',
        fontSize: 15,
        textAlign: 'center',
        flex: 0.2,
    },
    titulo: {
        color: '#0c7a02',
        fontSize: 35,
        textAlign: 'center',
        fontWeight: 'bold',
        flex: 0.3,
    },
    imagem: {
        width: 200,
        height: 240,
        flex: 0.4,
        marginTop: 35,
    },
    nome: {
        flex: 0.5,
        flexDirection: 'column',
    },
    cabecalho: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 200,
    },
    quadro: {
        flexDirection: 'column',
        height: 280,
        width: 380,
        padding: 5,
        backgroundColor: '#ffff',
        borderWidth: 2,
        borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tituloInfo: { 
        color: '#000', 
        fontSize: 12,
        width: 120,
        textAlign: "center",
    },
    textoInfo: {
        color: '#000', 
        fontWeight: 'bold',
        marginTop: 25,
        marginBottom: 40,
        width: 50,
        height: 25,
        textAlign: "center",
    },
    nivel: {
        flexDirection: 'column',
        color: '#000',
        alignItems: 'center',
        flex: 0.4,
    },
    acao: {
        flexDirection: 'column',
        color: '#000',
        alignItems: 'center',
        flex: 0.,
    },
    linhaAcao: {
        flexDirection: 'row',
        flex: 0.6,
    },
    linha: {
        flexDirection: 'row',
        flex: 0.5,
    },
    icone: {
        width: 100,
        height: 100,
        flexDirection: 'column',
        alignItems: 'center',
        margin: 10,
    },
    iconeOP: {
        width: 50,
        height: 50,
        flexDirection: 'column',
        alignItems: 'center',
        margin: 10,
    },
    iconeAcao: {
        width: 130,
        height: 150,
        flexDirection: 'column',
        alignItems: 'center',
    },
    botao: {
        flexDirection: 'column',
        width: 20,
        height: 2,
        borderRadius: 30,
        marginBottom: 8,
        marginTop: 8,
        flex: 0.6,
    },
    opcoes: {
        flexDirection: 'row',
        paddingLeft: 8,
        paddingRight: 8,
    },
    centeredView: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
      },
      modalView: {
        height: 300,
        width: 300,
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 5,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonClose: {
        backgroundColor: '#fff',
        alignItems: 'flex-end',
      },
      textStyle: {
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',
      },
});

const Detalhes = ({route, navigation} : any) => {
    const {id} = route.params;
    
    const [name, setName] = useState();//nome
    const [life, setLife] = useState();//vida
    const [foodLevel, setFoodLevel] = useState();//nível de comida
    const [funLevel, setFunLevel] = useState();//nível de diversão
    const [restLevel, setRestLevel] = useState();//nível de descanso

    const onPress = () => {navigation.navigate('Brincar', {id: id})};

    const getPet = useCallback(async () => {
        try {
            const {data} = await axios.get('/pet/'+id);
            console.log(data);
            setName(data.name);
            setLife(data.life);
            setFoodLevel(data.foodLevel);
            setFunLevel(data.funLevel);
            setRestLevel(data.restLevel);
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        getPet();
    }, []);

    const submit = async () => {
        try {
            await axios.delete(`/pet/${id}`);
            Alert.alert('Sucesso', 'Chibi criado com sucesso!', [
            {text: 'OK', onPress: getPet},]);
        } catch(error) {
            Alert.alert('Erro', 'Informações Inválidas! Tente novamente.', [
                {text: 'OK', onPress: () => console.log(error)},]);
        }
    } 

    const alimentar = async () => {
        await axios.post('/pet/'+id+'/food');
            Alert.alert('Sucesso', 'Pet alimentado!', [
            {text: 'OK', onPress: getPet},]);
    }

    const dormir = async () => {
        await axios.post('/pet/'+id+'/rest');
            Alert.alert('Sucesso', 'Pet dormindo!', [
            {text: 'OK', onPress: getPet},]);
    }

    const handleDelete = () => {
        Alert.alert('Excluir Pet', 'Tem certeza que quer deletar o pet?', [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel',},
            {text: 'OK', onPress: submit}
        ]
        )           
    }

    const [modalVisible, setModalVisible] = useState(false);

    const editar = () => {
        setModalVisible(true);
    }

    return(
        <SafeAreaView style={style.container}>
            <View style={style.cabecalho}>
                <Image style={style.imagem} source={require('../assets/1.png')} />
                <View style={style.nome}>
                    <Text style={style.titulo}>Nome {id}</Text>
                    <Text style={style.texto}>D E T A L H E S</Text>
                    <View style={style.opcoes}>
                        <View style={style.botao}>
                            <TouchableOpacity  onPress={handleDelete}>
                                <Image source={require('../assets/icones/1.png')} style={style.iconeOP}/>
                            </TouchableOpacity>
                        </View>
                        <View style={style.botao}>
                            <TouchableOpacity  onPress={editar}>
                                <Image source={require('../assets/icones/2.png')} style={style.iconeOP}/>
                            </TouchableOpacity>
                        </View>
                        <View style={style.botao}>
                            <TouchableOpacity  onPress={editar}>
                                <Image source={require('../assets/icones/4.png')} style={style.iconeOP}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={style.quadro}>
                <View style={style.linha}>
                    <View style={style.nivel}>
                        <ImageBackground source={require('../assets/detalhes/life.png')} resizeMode="cover" style={style.icone}>
                        <Text style={style.textoInfo}>{life}</Text>
                        <Text style={style.tituloInfo}>V I D A</Text></ImageBackground>
                    </View>
                    <View style={style.nivel}>
                        <ImageBackground source={require('../assets/detalhes/foodLevel.png')} resizeMode="cover" style={style.icone}>
                        <Text style={style.textoInfo}>{foodLevel}</Text>
                        <Text style={style.tituloInfo}>C O M I D A</Text></ImageBackground>
                    </View>
                </View>
                <View style={style.linha}>
                    <View style={style.nivel}>
                        <ImageBackground source={require('../assets/detalhes/funLevel.png')} resizeMode="cover" style={style.icone}>
                        <Text style={style.textoInfo}>{funLevel}</Text>
                        <Text style={style.tituloInfo}>D I V E R S Ã O</Text></ImageBackground>
                    </View>
                    <View style={style.nivel}>
                        <ImageBackground source={require('../assets/detalhes/restLevel.png')} resizeMode="cover" style={style.icone}>
                        <Text style={style.textoInfo}>{restLevel}</Text>
                        <Text style={style.tituloInfo}>D E S C A N S O</Text></ImageBackground>
                    </View>
                </View>
            </View>
            <View style={style.linhaAcao}>
                <View style={style.acao}>
                    <TouchableOpacity  onPress={alimentar}>
                        <Image source={require('../assets/detalhes/alimentar.png')} style={style.iconeAcao}/>
                    </TouchableOpacity>
                    <Text style={style.tituloInfo}>ALIMENTAR</Text>
                </View>
                <View style={style.acao}>
                    <TouchableOpacity  onPress={dormir}>
                        <Image source={require('../assets/detalhes/dormir.png')} style={style.iconeAcao}/>
                    </TouchableOpacity>
                    <Text style={style.tituloInfo}>DORMIR</Text>
                </View>
                <View style={style.acao}>
                    <TouchableOpacity  onPress={onPress}>
                        <Image source={require('../assets/detalhes/brincar.png')} style={style.iconeAcao}/>
                    </TouchableOpacity>
                    <Text style={style.tituloInfo}>BRINCAR</Text>
                </View>
            </View>
            <View style={style.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={style.centeredView}>
                        <View style={style.modalView}>
                            <Pressable
                                style={[style.button, style.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={style.textStyle}>X</Text>
                                </Pressable>
                            <EditarPet nome={name} id={id}/>
                        </View>
                    </View>
                </Modal>
            </View>
        </SafeAreaView>
    )
}

export default Detalhes;