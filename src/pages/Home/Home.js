import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import estilo from "./estilo";
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

import { 
    faSpaceShuttle, 
    faNewspaper, 
    faBookOpen, 
    faImages, 
    faVideo, 
    faClipboard 
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { BLUE_COLOR_90, GRAY_COLOR_90, ORANGE_COLOR_50 } from '../../constantes';


export default function Home() {
    const navigation = useNavigation();

    const colorsGradient = [ BLUE_COLOR_90, GRAY_COLOR_90 ];
    const colorIcon = ORANGE_COLOR_50;

    return (
        <View style={estilo.container}>
            <LinearGradient style={estilo.elementoContainer} start={{x:0,y:1}}
	            end={{x:1,y:0}} colors={colorsGradient}>
                <TouchableOpacity style={estilo.elemento} onPress={() => { 
                    navigation.navigate("Sobre") 
                }}>
                    <FontAwesomeIcon icon={ faSpaceShuttle } color={colorIcon} 
                        size={75} style={estilo.icone} />
                    <Text style={estilo.texto}>Sobre o CVT-E</Text>
                </TouchableOpacity>
            </LinearGradient>

            <LinearGradient style={estilo.elementoContainer} start={{x:0,y:1}}
	            end={{x:1,y:0}} colors={colorsGradient}>
                <TouchableOpacity style={estilo.elemento} onPress={() => { 
                    navigation.navigate("Noticias") 
                }}>
                    <FontAwesomeIcon icon={ faNewspaper } color={colorIcon} 
                        size={75} style={estilo.icone} />
                    <Text style={estilo.texto}>Notícias</Text>
                </TouchableOpacity>
            </LinearGradient>
        
            <LinearGradient style={estilo.elementoContainer} start={{x:0,y:1}}
	            end={{x:1,y:0}} colors={colorsGradient}>
                <TouchableOpacity style={estilo.elemento} onPress={() => { 
                    navigation.navigate("MaterialDidatico") 
                }}>
                    <FontAwesomeIcon icon={ faBookOpen } color={colorIcon} 
                        size={75} style={estilo.icone} />
                    <Text style={estilo.texto}>Material Didático</Text>
                </TouchableOpacity>
            </LinearGradient>               
                
            <LinearGradient style={estilo.elementoContainer} start={{x:0,y:1}}
	            end={{x:1,y:0}} colors={colorsGradient}>
                <TouchableOpacity style={estilo.elemento} onPress={() => { 
                    navigation.navigate("Praticas") 
                }}>
                    <FontAwesomeIcon icon={ faClipboard } color={colorIcon} 
                        size={75} style={estilo.icone} />
                    <Text style={estilo.texto}>Práticas</Text>
                </TouchableOpacity>
            </LinearGradient>

            <LinearGradient style={estilo.elementoContainer} start={{x:0,y:1}}
	            end={{x:1,y:0}} colors={colorsGradient}>
                <TouchableOpacity style={estilo.elemento} onPress={() => { 
                    navigation.navigate("Fotos") 
                }}>
                    <FontAwesomeIcon icon={ faImages } color={colorIcon} 
                    size={75} style={estilo.icone} />
                    <Text style={estilo.texto}>Fotos</Text>
                </TouchableOpacity>
            </LinearGradient>

            <LinearGradient style={estilo.elementoContainer} start={{x:0,y:1}}
	            end={{x:1,y:0}} colors={colorsGradient}>
                <TouchableOpacity style={estilo.elemento} onPress={() => { 
                    navigation.navigate("Videos") 
                }}>
                    <FontAwesomeIcon icon={ faVideo } color={colorIcon} 
                    size={75} style={estilo.icone} />
                    <Text style={estilo.texto}>Vídeos</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>    
    );
};
