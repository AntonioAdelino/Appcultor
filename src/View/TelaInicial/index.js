import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, TextInput, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";

export default function TelaInicial({ navigation }) {
  const [searchText, onChangeText] = React.useState("");

  let buscar = (texto, tipo) => {
    let tipoDeBusca = tipo;
    let textoProcurado = texto;
    if (tipoDeBusca === "Artigo") { navigation.navigate("BuscarArtigo", { textoProcurado }) }
    else {
      navigation.navigate("BuscarFlor", { textoProcurado })
    }

  }


  return (
    <ImageBackground source={require('../../../assets/abelha.png')} style={styles.container}>

      <TextInput
        style={styles.textInput}
        onChangeText={(text) => onChangeText(text)}
        placeholder="Faça sua busca aqui"
        value={searchText}
      />
      <StatusBar style="auto" />
      <View style={styles.buttonContainer}>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            buscar(searchText, "Artigo")
            // navigation.navigate("BuscarArtigo", { searchText, tipoDeBusca = "Artigo" })
          }
        >
          <Text style={styles.buttonText}>Buscar Artigo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            buscar(searchText, "Flor")
          }>
          <Text style={styles.buttonText}>Buscar Flor</Text>
        </TouchableOpacity>

      </View>

    </ImageBackground >

  );
}
