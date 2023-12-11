import React, { useState, useEffect } from 'react';
import { Text, FlatList, View, Image, TouchableOpacity, Modal } from 'react-native';
import lerNoticias from '../../services/Noticias';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import { WebView } from 'react-native-webview';

import estilo from "./estilo";
import { BLUE_COLOR_90, GRAY_COLOR_90 } from '../../constantes';


export default function Noticias() {

    const [noticias, setNoticias] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [noticiaSelecionada, setNoticiaSelecionada] = useState({});

    const colorsGradient = [ BLUE_COLOR_90, GRAY_COLOR_90 ];

    const ordernarPorId = (lista) => {
        return lista.sort((a, b) => b.id - a.id);
    }

    console.log(ordernarPorId(noticias));

    useEffect(() => {
        lerNoticias(setNoticias);
    }, []);

    return (
        <>
        <FlatList
            data={ordernarPorId(noticias)} 
            showsVerticalScrollIndicator={false}
            numColumns={1}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={estilo.containerLista}
            renderItem={({ item }) =>
                <LinearGradient style={estilo.elementoContainer} start={{x:0,y:1}}
	                end={{x:1,y:0}} colors={colorsGradient}>
                    <TouchableOpacity style={estilo.elemento} onPress={() => { 
                        setModalVisible(true), 
                        setNoticiaSelecionada(item) 
                    }}>
                        <Image source={{ uri: item.urlImagem }} style={estilo.image} />
                        <Text numberOfLines={2} ellipsizeMode={'tail'} style={estilo.titulo}>
                            {item.titulo}
                        </Text>
                        <Text style={estilo.dataHora}>
                            {item.dataPublicacao} {item.horaPublicacao}
                        </Text>
                    </TouchableOpacity>
                </LinearGradient>
            }
        />

        <Modal visible={modalVisible}>
            <View style={estilo.containerModal}>
                <View style={estilo.containerIconeModal}>
                    <TouchableOpacity onPress={() => { setModalVisible(!modalVisible) }} 
                        style={estilo.iconeModal}
                        >
                            <Ionicons name={'md-arrow-back'} size={24} color={'#FCFCFC'}/>
                    </TouchableOpacity>
                </View>

                <WebView source={{ uri: noticiaSelecionada.urlTexto }} /> 
            </View>
        </Modal>
        </>
    );
};

