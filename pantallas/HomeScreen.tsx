import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate('IniciarSesion')}>
        <Image
          source={require('../imagenes/Starbucks_Logo.svg.webp')}
          style={{ width: 200, height: 200 }}
        />
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;
