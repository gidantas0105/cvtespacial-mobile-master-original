import { StyleSheet, Platform } from 'react-native';
import Constants from 'expo-constants';

import {
    GRAY_COLOR_77,
    BLUE_COLOR_30,
    GRAY_COLOR_30,
    GRAY_COLOR_55,
    GRAY_COLOR_80
} from '../../constantes';

const estilo = StyleSheet.create({
    //FLATLIST
    containerLista: {
        padding: 16,
        paddingTop: 6,
        paddingBottom: 30,
    },
    elementoContainer: {
        maxHeight: 280, 
        marginTop: 14,
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: GRAY_COLOR_80,
    },
    elemento: {
        maxHeight: '100%',
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: GRAY_COLOR_80,
    },
    image: {
        width: '100%',
        height: 160,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        opacity: 0.8,
        backgroundColor: GRAY_COLOR_77,
    },
    titulo: {
        fontSize: 20,
        paddingLeft: 12,
        paddingRight: 12,
        marginTop: 12,
        marginBottom: 4,
        color: GRAY_COLOR_30,
        fontFamily: 'Roboto_400Regular',
    },
    dataHora: {
        fontSize: 16,
        paddingLeft: 12,
        marginTop: 4,
        marginBottom: 6,
        color: GRAY_COLOR_55,
    },


    //MODAL
    containerModal: {
        flex: 1,
    },
    containerListaModal: {
        padding: 15,
        paddingTop: 22,
        paddingBottom: 35,
    },
    containerIconeModal: {
        width: '100%',
        height: 55,
        padding: 15,
        paddingTop: Platform.OS == 'ios' ? Constants.statusBarHeight + 16 : 16,
        paddingLeft: 21,
        backgroundColor: BLUE_COLOR_30,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: GRAY_COLOR_77,
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
});

export default estilo;