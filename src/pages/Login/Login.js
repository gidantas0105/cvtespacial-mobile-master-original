import React from 'react';
import { Alert, View, Text, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import estilo from "./estilo";
import { useNavigation } from '@react-navigation/native';
import { api } from '../../services/api';
import { LinearGradient } from 'expo-linear-gradient';

import imgLogo from '../../../assets/splash.png';
import { BLUE_COLOR_35, BLUE_COLOR_85, WHITE_COLOR } from '../../constantes';

export default function Login() {

    const navigation = useNavigation();

    const colorsGradient = [ BLUE_COLOR_35, BLUE_COLOR_85, WHITE_COLOR ];

    const entrar = async () => {
        try {
            const tokenExistente = await AsyncStorage.getItem("@CVTAPP:token");  

            const response = await api.post("/usuarios/refresh-token", { 
                token: tokenExistente 
            });  

            const token = response.headers["x-access-token"]; 

            await AsyncStorage.setItem("@CVTAPP:token", token);

            navigation.navigate("Home");

        } catch (err) {
            console.log('Erro: ' + err.problem);
            Alert.alert("Ops! Erro de conexão.");
        }
    };

    entrar();


    return (
        <LinearGradient style={estilo.container} colors={colorsGradient} start={{x:0,y:2}} 
            end={{x:1,y:0}}>
            <Image source={imgLogo} style={estilo.logo}/>

            <TouchableOpacity style={estilo.links} onPress={() => entrar()}>
                <Text style={estilo.textoLink}>
                    Não está conseguindo acessar? Clique aqui.
                </Text>
            </TouchableOpacity>
        </LinearGradient>
    );
};