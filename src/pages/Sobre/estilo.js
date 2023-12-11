import { StyleSheet } from 'react-native';

import { LARGURA } from '../../constantes';

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    webview: {
        width: LARGURA,
    },
});

export default estilo;