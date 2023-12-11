import { StyleSheet, Platform } from 'react-native';
import Constants from 'expo-constants';

import { 
    BLACK_COLOR, 
    GRAY_COLOR_77,
    BLUE_COLOR_43,
    BLUE_COLOR_30,
    GRAY_COLOR_30,
    GRAY_COLOR_55,
    GRAY_COLOR_80,
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
        opacity: 0.9,
        backgroundColor: GRAY_COLOR_77,
    },
    sobreCapa: {
        position: 'absolute',
        width: '100%',
        height: 160,
        backgroundColor: BLACK_COLOR,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        opacity: 0.5,
        justifyContent: 'center',
    },
    icone: {
        position: 'absolute',
        alignSelf: 'center',
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
    canal: {
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