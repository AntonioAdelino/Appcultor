import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./TelaInicial";
import { color } from "react-native-reanimated";
import Artigo from "./Artigo";
import BuscarArtigo from "./BuscarArtigo";

const Stack = createStackNavigator();

export default function StackAdmin() {
  return (
    <Stack.Navigator 
    screenOptions={{
      headerStyle: {
        backgroundColor: '#f7b20d',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
      initialRouteName="Home">

      <Stack.Screen name="Home" 
        component={Home} 
        options={{
          title: 'Appcultor',
          
        }}/>
      <Stack.Screen name="Artigo" 
        component={Artigo} 
        />
      <Stack.Screen name="BuscarArtigo" 
        options = {{
          title: "Artigos",
        }}


        component={BuscarArtigo} />
    </Stack.Navigator>
  );
}
