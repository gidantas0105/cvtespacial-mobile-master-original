import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MaterialDidatico from './pages/MaterialDidatico/MaterialDidatico';
import Fotos from './pages/Fotos/Fotos';
import Home from './pages/Home/Home';
import Noticias from './pages/Noticias/Noticias';
import OndeEstamos from './pages/OndeEstamos/OndeEstamos';
import Mais from './pages/Mais/Mais';
import Sobre from './pages/Sobre/Sobre';
import Praticas from './pages/Praticas/Praticas';
import Videos from './pages/Videos/Videos';

import { BLUE_COLOR_30, GRAY_COLOR_95 } from './constantes';

const HomeStack = createStackNavigator();
  
function HomeStackScreen() {
    return (
        <HomeStack.Navigator screenOptions={{
            headerShown: true,
            headerStyle: {
                backgroundColor: BLUE_COLOR_30,
            },
            headerTintColor: GRAY_COLOR_95,
            headerTitleStyle: {
                fontWeight: 'bold',
                fontFamily: 'Raleway_400Regular',
            },
        }} >
            <HomeStack.Screen name="Home" component={Home} 
                options={{ title: 'CVT-Espacial', headerLeft: null }} />
            <HomeStack.Screen name="Fotos" component={Fotos} 
                options={{ title: 'Fotos' }} />
            <HomeStack.Screen name="Noticias" component={Noticias} 
                options={{ title: 'Notícias' }} />
            <HomeStack.Screen name="Sobre" component={Sobre} 
                options={{ title: 'Sobre o CVT-E' }} />
            <HomeStack.Screen name="MaterialDidatico" component={MaterialDidatico}  
                options={{ title: 'Material Didático' }} />
            <HomeStack.Screen name="Praticas" component={Praticas} 
                options={{ title: 'Práticas' }} />
            <HomeStack.Screen name="Videos" component={Videos} 
                options={{ title: 'Vídeos' }} />
        </HomeStack.Navigator>
    );
}
  
const OndeEstamosStack = createStackNavigator();
  
function OndeEstamosStackScreen() {
    return (
        <OndeEstamosStack.Navigator screenOptions={{
            headerShown: true,
            headerStyle: {
                backgroundColor: BLUE_COLOR_30,
            },
            headerTintColor: GRAY_COLOR_95,
            headerTitleStyle: {
                fontWeight: 'bold',
                fontFamily: 'Raleway_400Regular',
            },
        }} >
            <OndeEstamosStack.Screen name="OndeEstamos" component={OndeEstamos} options={{ title: 'Onde Estamos', headerLeft: null }} />
        </OndeEstamosStack.Navigator>
    );
}

const MaisStack = createStackNavigator();
  
function MaisStackScreen() {
    return (
        <MaisStack.Navigator screenOptions={{
            headerShown: true,
            headerStyle: {
                backgroundColor: BLUE_COLOR_30,
            },
            headerTintColor: GRAY_COLOR_95,
            headerTitleStyle: {
                fontWeight: 'bold',
                fontFamily: 'Raleway_400Regular',
            },
        }} >
            <MaisStack.Screen name="Mais" component={Mais} options={{ title: 'Mais', headerLeft: null }} />
        </MaisStack.Navigator>
    );
}

export { HomeStackScreen, OndeEstamosStackScreen, MaisStackScreen };