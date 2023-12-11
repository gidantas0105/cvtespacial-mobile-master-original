import React from 'react';
import { View } from 'react-native';
import estilo from "./estilo";
import { WebView } from 'react-native-webview';
import { urlBase } from '../../services/api';

export default function Home() {
    return (
        <View style={estilo.container}>            
            <WebView source={{ uri: `${urlBase}/sobre-o-cvte.html`}} 
            style={estilo.webview} />         
        </View>
    );
}