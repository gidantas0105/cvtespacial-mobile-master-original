import { StyleSheet } from 'react-native';

import { GRAY_COLOR_20, GRAY_COLOR_77 } from '../../constantes';

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 8,
    },
    containerText: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: 18,
        paddingBottom: 12,
        margin: 5,
    },
    texto: {
        fontSize: 22,
        width: '85%',
        paddingLeft: 10,
        color: GRAY_COLOR_20,
    },
    linha: {
        alignSelf: 'center',
        width: '98%',
        height: 1,
        backgroundColor: GRAY_COLOR_77,
    },
    icone: {
        alignSelf: 'center',
    },
});

export default estilo;