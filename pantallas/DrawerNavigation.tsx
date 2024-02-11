import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from './ProfileScreen';
import SettingScreen from './SettingScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={ProfileScreen} />
      <Drawer.Screen name="Other" component={SettingScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
