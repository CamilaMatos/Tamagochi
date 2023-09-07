import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const style = StyleSheet.create({
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
});

const Login = ({navigation}: any) => {

    const [login, setLogin] = useState<string>();
    const [senha, setSenha] = useState<string>();
    const [hasError, setHasError] = useState(false);

    const onChangeInput = (value:string) => {
        setLogin(value);
    };

    return (
        <SafeAreaView>
            <TextInput style={style.input} value={login} onChangeText={onChangeInput}/>

            <TextInput style={style.input} value={senha} onChangeText={onChangeInput}/>

            <Button onPress={() => {
                navigation.navigate('Home', {nome:{login}})
            }} title="Navegar para a tela Home" />
        </SafeAreaView>
    );
}

export default Login;