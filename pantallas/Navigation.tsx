// Navigation.tsx

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen'; 
import NextScreen from './NextScreen';
import IniciarSesion from './IniciarSesion'; 
import OTP from './OTP';
import Datos from './Datos'; 
import Principal from './principal'; 
import DrawerNavigator from './DrawerNavigation';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Next" component={NextScreen} />
        <Stack.Screen name="IniciarSesion" component={IniciarSesion} /> 
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="Datos" component={Datos} /> 
        <Stack.Screen name="Principal" component={Principal} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
