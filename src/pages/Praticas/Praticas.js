import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, FlatList, Modal, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { WebView } from 'react-native-webview';
import estilo from "./estilo";

import lerPraticas from '../../services/Praticas';
import { BLUE_COLOR_90, GRAY_COLOR_90 } from '../../constantes';

export default function Praticas() {
    
    const [praticas, setPraticas] = useState([]);

    const [modalVisible, setModalVisible] = useState(false);
    const [praticaSelecionada, setPraticaSelecionada] = useState('');

    const colorsGradient = [ BLUE_COLOR_90, GRAY_COLOR_90 ];

    const columns = 2;

    useEffect(() => {
        lerPraticas(setPraticas);
    }, []);
    /*
    function avisarUsuario() {
        Alert.alert(
            "Atenção!",
            "Os links desta seção estão disponíveis somente para acesso local no CVT-Espacial (Parnamrim/RN).",
        )
    }

    avisarUsuario();
    */

    //Função para preencher os locais nas colunas que não foram ocupadas por praticas numa
    //linha, criando um ou mais elementos não visíveis para tal feito.
    function createRows(data, columns) {
        const rows = Math.floor(data.length / columns); 
        let lastRowElements = data.length - rows * columns;  

        //console.log(lastRowElements % columns);
        
        if (lastRowElements % columns !== 0){
            while (lastRowElements !== columns) { 
                data.push({ 
                id: `empty-${lastRowElements}`,
                empty: true
                });
                
                lastRowElements += 1; 
            }  
        }

        return data; 
    }
    
    return (
        <>
        <FlatList      
            contentContainerStyle={estilo.containerLista}
            data={createRows(praticas, columns)}
            showsVerticalScrollIndicator={false}
            numColumns={columns}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
                if (item.empty) {
                    return <View style={[estilo.elemento, estilo.elementoEmpty]} />;
                }
                return (
                <LinearGradient style={estilo.elemento} start={{x:0,y:1}}
	                end={{x:1,y:0}} colors={colorsGradient}>
                    <TouchableOpacity onPress={() => { 
                        setModalVisible(true),
                        setPraticaSelecionada(item)
                    }}
                        style={estilo.containerTexto}>  
                        <Text numberOfLines={5} ellipsizeMode={'tail'} 
                            style={estilo.texto}>{item.titulo}</Text>
                    </TouchableOpacity>
                </LinearGradient>  
                )
            }}
        />

        <Modal visible={modalVisible}>
            <View style={estilo.containerModal}>
                <View style={estilo.containerIconeModal}>
                <TouchableOpacity onPress={() => { setModalVisible(!modalVisible) }} 
                    style={estilo.iconeModal}
                >
                    <Ionicons name={'md-arrow-back'} size={24} color={'#FCFCFC'}/>
                </TouchableOpacity>

                <Text numberOfLines={1} ellipsizeMode={'tail'} style={estilo.textoModal}>
                    {praticaSelecionada.titulo}
                </Text>
                </View>

                <WebView source={{ uri: praticaSelecionada.url }} /> 
            </View>
        </Modal>
        </>
    );
};
