import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

let separaArray = (nomes) => nomes.join(", ");

export default function Flor({ route }) {
  const florRecebida = route.params.flor;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {console.log(florRecebida)}

      <Text style={styles.title} id="title">
        {florRecebida.scientificName}
      </Text>

      <View style={styles.body} >

        <Text style={styles.text} id="tag">
          Nomes: {separaArray(florRecebida.names)}.
        </Text>

        <Text style={styles.text}>Familia: {florRecebida.family}</Text>

        <Text style={styles.text} id="tag">
          Recursos Florais: {separaArray(florRecebida.flowerResources)}.
        </Text>
      </View>
    </View>
  );
}
