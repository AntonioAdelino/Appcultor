import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, TextInput, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";

export default function TelaInicial({ navigation }) {
  const [searchText, onChangeText] = React.useState("");

  const receivedObject = {
    title: "What is Lorem Ipsum?",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    tags: ["Lorem Ipsum", "x", "y"],
    language: "English",
    author: "Autor",
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => onChangeText(text)}
        value={searchText}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("BuscarArtigo", { receivedObject, searchText })
        }
      >
        <Text style={styles.text}>Buscar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
      <View>
      {/* <Button
          onPress={() => navigation.navigate("Artigo", { receivedObject })}
          title="This Button leads to Article"
        /> */}
          
                
      </View>
    </View>
  );
}
