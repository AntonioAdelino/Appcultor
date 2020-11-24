import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./TelaInicial";
import Artigo from "./Artigo";
import BuscarArtigo from "./BuscarArtigo";
import BuscarFlor from "./BuscarFlor";
import Flor from "./Flor";
import Info from "./Info"

const Stack = createStackNavigator();

export default function StackAdmin() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f7b20d',
          elevation: 0
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

        }} />
      <Stack.Screen name="Artigo"
        component={Artigo}
      />
      <Stack.Screen name="BuscarArtigo"
        options={{
          title: "Artigos",
        }}
        component={BuscarArtigo} />

      <Stack.Screen name="BuscarFlor"
        options={{
          title: "Flores",
        }}
        component={BuscarFlor} />

      <Stack.Screen name="Flor"
        component={Flor}
      />

      <Stack.Screen name="Info"
        options={{
          title: "Apoio",
        }}
        component={Info} />
    </Stack.Navigator>
  );
}
