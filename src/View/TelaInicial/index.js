import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, TextInput, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";

export default function TelaInicial({ navigation }) {
  const [searchText, onChangeText] = React.useState("");

  return (
    <View style={styles.container}>
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
            navigation.navigate("BuscarArtigo", { searchText })
          }
        >
          <Text style={styles.text}>Buscar</Text>
        </TouchableOpacity>

      </View>

    </View>



  );
}
