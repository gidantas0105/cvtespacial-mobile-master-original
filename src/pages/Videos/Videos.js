import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Modal } from 'react-native';
//import { Picker } from '@react-native-picker/picker';
import estilo from "./estilo";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { WebView } from 'react-native-webview';
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { LinearGradient } from 'expo-linear-gradient';

import { BLUE_COLOR_90, GRAY_COLOR_90, GRAY_COLOR_95 } from '../../constantes';
import lerVideos from '../../services/Videos';
import preparaImagem from '../../services/PreparaImagem';

export default function Videos() {

  const [videos, setVideos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  
  const [urlVideoSelecionado, setUrlVideoSelecionado] = useState('');

  const colorsGradient = [ BLUE_COLOR_90, GRAY_COLOR_90 ];

  const ordernarPorId = (lista) => {
    return lista.sort((a, b) => b.id - a.id);
  }

  useEffect(() => {
    lerVideos(setVideos);
  }, []);


  return (
    <>
    <FlatList
      contentContainerStyle={estilo.containerLista}
      data={ordernarPorId(videos)}
      showsVerticalScrollIndicator={false}
      numColumns={1} 
      keyExtractor={(item) => (item.id)}
      renderItem={({ item }) => (
        <LinearGradient style={estilo.elementoContainer} start={{x:0,y:1}}
	        end={{x:1,y:0}} colors={colorsGradient}>
          <TouchableOpacity style={estilo.elemento} onPress={() => { 
            setModalVisible(true), 
            setUrlVideoSelecionado(item.url) 
          }}>
            <Image source={{ uri: preparaImagem(item.imagem) }} style={estilo.image} />
            <View style={estilo.sobreCapa}>
              <FontAwesomeIcon icon={ faPlayCircle } color={GRAY_COLOR_95} size={70} 
                style={estilo.icone} />
            </View>

            <Text numberOfLines={2} ellipsizeMode={'tail'} style={estilo.titulo}>
              {item.titulo}
            </Text>

            <Text style={estilo.canal}>Canal: {item.fonte} </Text>

          </TouchableOpacity>
        </LinearGradient>
    )}/>

    <Modal visible={modalVisible}>
      <View style={estilo.containerModal}>
        <View style={estilo.containerIconeModal}>
          <TouchableOpacity onPress={() => { setModalVisible(!modalVisible) }} 
            style={estilo.iconeModal} >
              <Ionicons name={'md-arrow-back'} size={24} color={'#FCFCFC'}/>
          </TouchableOpacity>
        </View>

        <WebView
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: urlVideoSelecionado }}
          containerStyle={estilo.video}
        /> 
      </View>
    </Modal>
    </>
  );
};

