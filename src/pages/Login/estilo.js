import { StyleSheet } from 'react-native';

import {  
    BLUE_COLOR_30,
    BLUE_COLOR_43,
    BLUE_COLOR_85,
} from '../../constantes';

const estilo = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%',
    }, 
    links: {
        width: 300,
        position: 'absolute',
        bottom: 40,
        backgroundColor: BLUE_COLOR_85,
        borderWidth: 0.5,
        borderColor: BLUE_COLOR_43,
        borderRadius: 6,
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    textoLink: {
        color: BLUE_COLOR_30, 
        textAlign: 'center',
        fontSize: 17,
    }
});

export default estilo;