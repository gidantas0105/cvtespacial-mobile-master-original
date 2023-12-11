import { StyleSheet } from 'react-native';

import { 
    ALTURA, 
    GRAY_COLOR_93,
    GRAY_COLOR_77,
    BLUE_COLOR_43,
    GRAY_COLOR_91,
    GRAY_COLOR_95,
    GRAY_COLOR_20,
} from '../../constantes';

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        height: ALTURA,
        backgroundColor: GRAY_COLOR_93, 
        padding: 18, 
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    elementoContainer: {
        width: "48%", 
        height: 175, 
        marginBottom: 12,
        backgroundColor: GRAY_COLOR_91,
        borderColor: BLUE_COLOR_43, 
        borderWidth: 0.8,  
        borderRadius: 8,
        paddingBottom: 5,
        paddingTop: 5,
    },
    elemento: {
        width: '100%',
        height: '100%',
    },
    icone: {
        alignSelf: 'center',
        top: '15%',
        marginBottom: 15,
    },
    texto: {
        width: '100%',
        fontSize: 19, 
        textAlign: "center",  
        color: GRAY_COLOR_20,  
        backgroundColor: GRAY_COLOR_95,  
        opacity: 0.9,
        padding: 5,
        fontFamily: 'OpenSans_400Regular',
        position: 'absolute',
        zIndex: 1,
        bottom: 8,
        borderColor: GRAY_COLOR_77, 
        borderWidth: 0.5,  
    }    
});

export default estilo;