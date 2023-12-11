import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { GRAY_COLOR_30 } from '../../constantes';


import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import estilo from "./estilo";
import { deslogar } from '../../services/auth';

export default function Mais() {
    const navigation = useNavigation();

    return (
      <View style={estilo.container}>

        <TouchableOpacity style={estilo.containerText} 
        onPress={() => deslogar().then(() => navigation.navigate("Login"))}
        >
          <Text style={estilo.texto}>Sair</Text>
          <FontAwesomeIcon icon={ faSignOutAlt } color={GRAY_COLOR_30} 
            size={23} style={estilo.icone} />        
        </TouchableOpacity>

        <View style={estilo.linha} />

      </View>
    );
};