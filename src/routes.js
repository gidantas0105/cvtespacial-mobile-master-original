import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login/Login';

import { BLUE_COLOR_24, WHITE_COLOR } from './constantes';

import BottomNavigator from "./BottomNavigator";

const AppStack = createStackNavigator(); 

export default function Routes() {

    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{
            headerShown: true,
            headerStyle: {
                backgroundColor: BLUE_COLOR_24,
            },
            headerTintColor: WHITE_COLOR,
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            }} mode='modal' initialRouteName={'Login'} >
                <AppStack.Screen name="Login" component={Login} 
                    options={{headerShown: false}} />
                <AppStack.Screen name="Home" component={BottomNavigator} 
                    options={{headerShown: false}}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
};