import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from './pantallas/Inicio';
import Perfil_Victor from './pantallas/perfil_victor';
import Perfil_Javier from './pantallas/perfil_javier';
import Evaluacion from './components/evalucion/Evaluacion';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

const App2 = () => {
  const [calificacion, setCalificacion] = useState(0);

  const handleCalificacionChange = (valor: number) => {
    if (calificacion === 1 && valor === 1) {
      setCalificacion(0);
    } else {
      setCalificacion(valor);
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Hogar" component={Inicio} />
        <Stack.Screen name="Perfil Victor" component={Perfil_Victor} />
        <Stack.Screen name="Perfil Javier" component={Perfil_Javier} />
        <Stack.Screen name="Evaluacion" options={{ headerShown: false }}>
          {() => (
            <SafeAreaView>
              <Evaluacion calificacion={calificacion} onCalificacionChange={handleCalificacionChange} />
            </SafeAreaView>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App2;
