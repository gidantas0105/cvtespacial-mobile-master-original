import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from './api';

//export const onSignIn = () => AsyncStorage.setItem("@CVTAPP:token", "true");


export const deslogar = async () => {
    try {
        await AsyncStorage.removeItem("@CVTAPP:token");
    } catch (err) {
        Alert.alert('Erro ao tentar deslogar.');
    }

};

/*

export const isUsuarioLogado = async () => {
    try {
        const usuario = await AsyncStorage.getItem("@CVTAPP:usuario");
        const usuarioJson = JSON.parse(usuario);

        console.log(usuarioJson);

        let token = null;

        if (usuarioJson) {
            
            const response = await api.post("/usuarios/refresh-token", { 
                id: usuarioJson.id, email: usuarioJson.email
            } );

            token = response.headers["x-access-token"];
            await AsyncStorage.setItem("@CVTAPP:token", token);

            console.log(321);
        }

        console.log(124);
        console.log(token);

        return (token) ? true : false;
        
    } catch (err) {
        console.log(err);
    }
};

*/