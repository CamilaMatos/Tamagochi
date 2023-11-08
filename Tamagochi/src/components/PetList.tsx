import {  Alert,  Image, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import axios from '../axios.config';
import { useState } from 'react';
import EditarPet from './EditarPet';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import pet from "../stores/pet";



const style = StyleSheet.create({
    quadro: {
        flexDirection: 'row',
        height: 150,
        width: 380,
        margin: 10,
        padding: 5,
        backgroundColor: '#ffff',
        borderWidth: 2,
        borderColor: '#ff',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titulo: {
        fontWeight: 'bold', 
        color: '#000', 
        flex: 0.4
    },
    texto: {
        color: '#000', 
        flex: 0.7, 
        textAlign: 'left'
    },
    botao: {
        flexDirection: 'column',
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
    imagem: {
        width: 95,
        height: 125,
        marginLeft: 10,
    },
    infos: {
        flexDirection: 'column', 
        flex: 0.5, 
        alignItems: 'center',
        paddingLeft: 15,
    },
    linhaInfo: {
        flex: 0.2, 
        flexDirection: 'row',
        alignItems: 'center',
    },
    opcoes: {
        flexDirection: 'column', 
        flex: 0.2, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    icone:{
        width: 40,
        height: 40,
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

type PetListProps = {
    list: {
        id: string,
        name:string,
        life:string,
        foodLevel:string,
    },
    getPet: () => void, 
}

const PetList = ({list, getPet}: PetListProps) => {

    const navigation = useNavigation();
    const onPress = () => {navigation.navigate('Detalhes', {id:list.id})};

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

    const {img} = pet.getState();
    const imagem = '../assets/'+img+'.png';

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
        <SafeAreaView>
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
                            <EditarPet nome={list.name} id={list.id}/>
                        </View>
                    </View>
                </Modal>
            </View>
        <View style={style.quadro}>
            
            <View style={{flex: 0.3}}>
                <Image 
                    source={require(imagem)}  
                    style={style.imagem}
                />
            </View>
            <View style={style.infos}>
                <View style={style.linhaInfo}>
                    <Text style={style.titulo}>Nome:</Text>
                    <Text style={style.texto}>{list.name} </Text>
                </View>
                <View style={style.linhaInfo}>
                    <Text style={style.titulo}>Vida:</Text>
                    <Text style={style.texto}>{list.life} </Text>
                </View>
                <View style={style.linhaInfo}>
                    <Text style={style.titulo}>Comida:</Text>
                    <Text style={style.texto}>{list.foodLevel} </Text>
                </View>
            </View>
            <View style={style.opcoes}>
                <View style={style.botao}>
                    <TouchableOpacity  onPress={handleDelete}>
                        <Image source={require('../assets/icones/1.png')} style={style.icone}/>
                    </TouchableOpacity>
                </View>
                <View style={style.botao}>
                    <TouchableOpacity  onPress={editar}>
                        <Image source={require('../assets/icones/2.png')} style={style.icone}/>
                    </TouchableOpacity>
                </View>
                <View style={style.botao}>
                    <TouchableOpacity  onPress={onPress}>
                        <Image source={require('../assets/icones/3.png')} style={style.icone}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </SafeAreaView>
    )
}


export default PetList;