import React, { useState, useEffect } from 'react';
import { View, Image, FlatList, TouchableOpacity, Modal, Text } from 'react-native';
import estilo from "./estilo";
import Ionicons from 'react-native-vector-icons/Ionicons';
import lerFotos from '../../services/Fotos';


export default function Fotos() {
  
  const [fotos, setFotos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const [urlFotoSelecionada, setUrlFotoSelecionada] = useState('');
  const [tituloFotoSelecionada, setTituloFotoSelecionada] = useState('');

  const ordernarPorId = (lista) => {
    return lista.sort((a, b) => b.id - a.id);
  }

  useEffect(() => {
    lerFotos(setFotos);
  }, []);

  const colunas = 3;

  
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
    <>
    <FlatList      
      contentContainerStyle={estilo.containerLista}
      data={criarElementos(ordernarPorId(fotos), colunas)}
      showsVerticalScrollIndicator={false}
      numColumns={colunas}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
          if (item.empty) {
            return <View style={[estilo.elemento, estilo.elementoEmpty]} />;
          }
          return (
          <View style={estilo.elemento}>
            <TouchableOpacity onPress={() => { setModalVisible(true), 
              setUrlFotoSelecionada(item.urlImagem), setTituloFotoSelecionada(item.titulo) }}
            >
              <Image resizeMode={'cover'} source={{ uri: item.urlImagem }}
                style={estilo.imagem}/>
            </TouchableOpacity>
          </View>
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
            {tituloFotoSelecionada}
          </Text>
        </View>

        <Image source={{ uri: urlFotoSelecionada }} style={estilo.imagemModal}/>
      </View>
    </Modal>
    </>
  );
};
