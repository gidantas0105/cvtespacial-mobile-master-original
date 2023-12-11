import { StyleSheet, Platform } from 'react-native';
import Constants from 'expo-constants';

import { 
    ALTURA,
    BLUE_COLOR_30,
    GRAY_COLOR_20, GRAY_COLOR_95, LARGURA, 
} from '../../constantes';

const estilo = StyleSheet.create({
    //FLATLIST
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

    //MODAL
    containerModal: {
        width: LARGURA,
        height: '100%',
    },
    imagemModal: {
        width: '100%',
        resizeMode: 'contain',
        zIndex: 1,
        flex: 1,
    },
    containerIconeModal: {
        width: '100%',
        height: 55,
        paddingTop: Platform.OS == 'ios' ? Constants.statusBarHeight + 16 : 16,
        paddingLeft: 21,
        backgroundColor: BLUE_COLOR_30,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    iconeModal: {
        width: '12%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        zIndex: 1,
        left: 5,
    },
    textoModal: {
        marginLeft: 50,
        color: GRAY_COLOR_95,
        fontFamily: 'OpenSans_700Bold',
        fontSize: 18,
        textAlign: 'right',
    },
});

export default estilo;