import { StyleSheet, Platform } from 'react-native';
import Constants from 'expo-constants';

import { 
    GRAY_COLOR_20, 
} from '../../constantes';

const estilo = StyleSheet.create({
    containerLista: {
        padding: 14,
        justifyContent: 'space-between',
    },
    elemento: {
        flexBasis: 0,
        flexGrow: 1,
        minHeight: 150,
        margin: 3, 
        borderRadius: 3,
        justifyContent: 'center',
    },
    elementoEmpty: {
        backgroundColor: "transparent",
    },
    containerTexto: {
        alignItems: 'center',
        padding: 15,
    },
    texto: {
        fontSize: 20,
        textAlign: 'center',
        color: GRAY_COLOR_20,
        fontFamily: 'OpenSans_400Regular',
    }, 
});

export default estilo;