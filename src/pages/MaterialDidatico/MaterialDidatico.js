import React,{ useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, FlatList, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import estilo from "./estilo";

import { BLUE_COLOR_90, GRAY_COLOR_90 } from '../../constantes';

import {
    lerMateriaisDidaticos, 
    preparaMaterialDidatico
} from '../../services/MaterialDidatico';



export default function MaterialDidatico() {

    const [materiaisDidaticos, setMateriaisDidaticos] = useState([]);

    const colorsGradient = [ BLUE_COLOR_90, GRAY_COLOR_90 ];

    const colunas = 2;

    useEffect(() => {
        lerMateriaisDidaticos(setMateriaisDidaticos);
    }, []);

    const abrirUrlSelecionada = async (url) => {
        const supported = await Linking.canOpenURL(url);
    
        if (supported) {
          await Linking.openURL(url);
        } else {
          Alert.alert("Não foi possível abrir este arquivo. Por favor, tente mais tarde.");
        }
    };

    function criarElementos(data, colunas) {
        const linhas = Math.floor(data.length / colunas); 
        let ultimosElementosDaLinha = data.length - linhas * colunas;  
        
        if (ultimosElementosDaLinha % colunas !== 0){
            while (ultimosElementosDaLinha !== colunas) { 
                data.push({ 
                id: `empty-${ultimosElementosDaLinha}`,
                empty: true
                });
                
                ultimosElementosDaLinha += 1; 
            }  
        }
        
        return data; 
    }
    
    return (
        <FlatList      
            contentContainerStyle={estilo.containerLista}
            data={criarElementos(materiaisDidaticos, colunas)}
            showsVerticalScrollIndicator={false}
            numColumns={colunas}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
                if (item.empty) {
                    return <View style={[estilo.elemento, estilo.elementoEmpty]} />;
                }
                return (
                <LinearGradient style={estilo.elemento} start={{x:0,y:1}}
	                end={{x:1,y:0}} colors={colorsGradient}>
                    <TouchableOpacity onPress={() => { 
                        abrirUrlSelecionada(preparaMaterialDidatico(item.arquivo))
                    }}
                        style={estilo.containerTexto}>  
                        <Text numberOfLines={5} ellipsizeMode={'tail'} 
                            style={estilo.texto}>{item.titulo}</Text>
                    </TouchableOpacity>
                </LinearGradient>  
                )
            }}
        />
    );
};