import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import axios from '../axios.config';
import { SafeAreaView } from 'react-native-safe-area-context';
import imagem1 from '../assets/brincar/pedra.png';
import imagem2 from '../assets/brincar/papel.png';
import imagem3 from '../assets/brincar/tesoura.png';
import imagem4 from '../assets/brincar/verso.png';
import { useEffect, useState } from 'react';

const style = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
        flex: 1,
    },
    tituloInfo: { 
        color: '#2E5D71', 
        fontSize: 12,
        width: 120,
        textAlign: "center",
    },
    escolha: { 
        color: '#2E5D71', 
        fontSize: 20,
        width: 300,
        textAlign: "center",
        fontWeight: 'bold',
        marginBottom: 50,
    },
    jokenpo: {
        width: 280,
        height: 280,
        marginTop: -5,
        backgroundColor: '#fff',
        marginBottom: -150,
    },
    acao: {
        flexDirection: 'column',
        color: '#000',
        alignItems: 'center',
        flex: 0.,
    },
    card: {
        flexDirection: 'row',
        height: 260,
        width: 390,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconeAcao: {
        width: 100,
        height: 150,
        flexDirection: 'column',
        alignItems: 'center',
    },
    cartas: {
        width: 140,
        height: 190,
        borderWidth: 2,
        borderColor: '#000',
    },
    linha: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    linha2: {
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
        width:500,
    },
    botao2: {
        backgroundColor: '#2E5D71',
        width: 130,
        height: 50,
        borderRadius: 35,
        marginTop: 30,
        margin: 10,
    },
    textoBotao2: {
        color: '#ffff',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10,
    },
    nome: {
        color: '#2E5D71', 
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: -30,
        flex: 1.5,
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
  
  
const Brincar = ({route, navigation} : any) => {
    const {id, nome} = route.params;
    

    const imagens:any = {
        1: imagem1,
        2: imagem2,
        3: imagem3,
    };
    const onPress = () => {navigation.navigate('Listar')};

    const [cartaApp, setCartaApp]= useState(imagem4);
    const [numApp, setnumApp]= useState(1);
    const [numUser, setnumUser]= useState(1);

    const SorteiaNumero = () => {
        const num = Math.floor(Math.random() * 3) + 1;
        setnumApp((prevNumApp) => {
            if (prevNumApp !== num) {
                setResultUser(""); // Limpa o resultado ao sortear um novo número
            }
            return num;
        });
    };
    

    const sort = () => {
        SorteiaNumero();
        setCartaApp(imagens[numApp]);
        console.log("numApp: " + numApp);
    };
    
    useEffect(() => {
        resultado();
    }, [numApp, numUser]);

    

    const [cartaUser, setCartaUser]= useState(imagem4);

    const [resultUser, setResultUser]= useState<string>();

    const resultado = () => {
        console.log("numApp: " + numApp);
        console.log("numUser: " + numUser);
        if (numApp === numUser) {
            setResultUser("Empate!");
        } else if (
            (numApp === 1 && numUser === 3) ||
            (numApp === 2 && numUser === 1) ||
            (numApp === 3 && numUser === 2)
        ) {
            setResultUser("Derrota!");
        } else {
            setResultUser("Vitória!");
        }
    
        console.log(resultUser);
    };
    

    const reverse = () => {
        setCartaApp(imagem4);
        setCartaUser(imagem4);
        brincando();
    }

    const alertar = () => {
        Alert.alert(resultUser, nome+' se divertiu muito com você', [
            {text: 'Voltar', onPress: () => navigation.goBack(), style: 'cancel',},
            {text: 'Jogar novamente!', onPress: () => reverse()},]);
    }

    const pedra = () => {
        setnumUser(1);
        setCartaUser(imagens[1]);
        console.log("Carta App: "+numApp);
        console.log("Carta User: "+numUser);
    }

    const papel = () => {
        setnumUser(2);
        setCartaUser(imagens[2]);
        console.log("Carta App: "+numApp);
        console.log("Carta User: "+numUser);
    }

    const tesoura = () => {
        setnumUser(3);
        setCartaUser(imagens[3]);
        console.log("Carta App: "+numApp);
        console.log("Carta User: "+numUser);
    }
    
    const brincando = async () => {
        await axios.post('/pet/'+id+'/play');
    }

    const jogar = async () => {
        if(cartaUser != imagem4){
            sort();
            setTimeout(() => alertar(), 1000);
        }
        
    };

    return (
        <SafeAreaView style={style.container}>
            <TouchableOpacity  onPress={() => navigation.goBack()} style={style.linhaVoltar}>
                <Image source={require('../assets/voltarc.png')} style={style.voltar}/>
            </TouchableOpacity>
            <Image source={require('../assets/brincar/nome.png')} style={style.jokenpo}/>
            <View style={style.linha2}>
                <Text style={style.nome}>{nome}</Text>
                <Text style={style.nome}>Você</Text>
            </View>
            <View style={style.card}>
                <Image source={cartaApp} style={style.cartas}/>
                <Image source={require('../assets/brincar/vs.png')} style={style.iconeAcao}/>
                <Image source={cartaUser} style={style.cartas}/>
            </View>
            <Text style={style.escolha}>Faça sua Jogada!!!</Text>
            <View style={style.linha}>
                <View style={style.acao}>
                    <TouchableOpacity  onPress={pedra}>
                        <Image source={require('../assets/brincar/pedra.png')} style={style.iconeAcao}/>
                    </TouchableOpacity>
                    <Text style={style.tituloInfo}>PEDRA</Text>
                </View>
                <View style={style.acao}>
                    <TouchableOpacity  onPress={papel}>
                        <Image source={require('../assets/brincar/papel.png')} style={style.iconeAcao}/>
                    </TouchableOpacity>
                    <Text style={style.tituloInfo}>PAPEL</Text>
                </View>
                <View style={style.acao}>
                    <TouchableOpacity onPress={tesoura}>
                        <Image source={require('../assets/brincar/tesoura.png')} style={style.iconeAcao}/>
                    </TouchableOpacity>
                    <Text style={style.tituloInfo}>TESOURA</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row',}}>
                <View style={style.botao2}>
                    <TouchableOpacity  onPress={onPress}>
                        <Text style={style.textoBotao2}>Listar Chibs</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.botao2}>
                    <TouchableOpacity  onPress={jogar}>
                        <Text style={style.textoBotao2}>Jogar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Brincar;