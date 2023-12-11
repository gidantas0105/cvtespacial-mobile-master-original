import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faListUl, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import { BLUE_COLOR_30, GRAY_COLOR } from './constantes';

import { 
  HomeStackScreen, 
  OndeEstamosStackScreen, 
  MaisStackScreen 
} from './StackNavigator';

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                
                let iconName;

                if (route.name === 'Home') {
                  iconName = faHome;
                }
                else if (route.name === 'OndeEstamos') {
                  iconName = faMapMarkerAlt;
                }              
                else if (route.name === 'Mais') {
                  iconName = faListUl;
                }    
                return <FontAwesomeIcon icon={ iconName } color={color} size={size} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: BLUE_COLOR_30,
              inactiveTintColor: GRAY_COLOR,
            }}
        >
            <Tab.Screen name="Home" component={HomeStackScreen} 
              options={{ title: 'CVT-Espacial' }} />
            <Tab.Screen name="OndeEstamos" component={OndeEstamosStackScreen} 
              options={{ title: 'Onde Estamos' }}/> 
            <Tab.Screen name="Mais" component={MaisStackScreen} 
              options={{ title: 'Mais' }}/>
        </Tab.Navigator>
    );
}