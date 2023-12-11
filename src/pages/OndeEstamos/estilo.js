import { StyleSheet } from 'react-native';

import { BLUE_COLOR_43 } from '../../constantes';

const estilo = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 20,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    containerMap: {
        flex: 1,
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        borderWidth: 0.8,
        borderRadius: 5,
        padding: 1,
        borderColor: BLUE_COLOR_43,
    },
    map: {
        width: '100%',
        height: '100%',
    },
    marker: {
        width: 90,
        height: 80, 
    },
});

export default estilo;