import React from 'react';
import { View } from 'react-native';
import estilo from "./estilo";
import MapView, { Marker } from 'react-native-maps';

export default function OndeEstamos() {
    return (
        <View style={estilo.container}>
            <View style={estilo.containerMap}>
                <MapView style={estilo.map} initialRegion={{
                    latitude: -5.9235691,
                    longitude: -35.1674227,
                    latitudeDelta: 0.014,
                    longitudeDelta: 0.014,
                }} >
                    <Marker style={estilo.marker}
                    coordinate={{latitude: -5.9238691, longitude: -35.1677000}} />
                </MapView>
            </View>
        </View>
    );
};