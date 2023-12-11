import 'react-native-gesture-handler';
import * as React from 'react';
import Routes from "./src/routes";
import AppLoading from 'expo-app-loading';

import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { Raleway_400Regular, useFonts } from '@expo-google-fonts/raleway';
import { OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular, 
    Roboto_500Medium, 
    Raleway_400Regular, 
    OpenSans_400Regular, 
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (       
    <Routes/>    
  );
};

