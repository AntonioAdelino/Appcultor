import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import MenuItem from "../../Components/menuItem";
import BarraDeBusca from "../../Components/barraDeBusca";
import itensMenu from "./itensMenu"
import styles from "./styles";

export default function TelaInicial({ navigation }) {
  const [searchText, onChangeText] = React.useState("");

  //Cuida das buscas

  const buscar = (texto, tipo) => {
    let tipoDeBusca = tipo;
    let textoProcurado = texto;
    navigation.navigate("BuscarArtigo", { textoProcurado })

  }

  //Cuida da navegação pelos icones
  const navegar = (tag) => {
    console.log(tag)
    if (tag === "Flora apícola") {
      navigation.navigate("BuscarFlor")
    } else {
      navigation.navigate("BuscarArtigo", { tag })
    }
  }

  return (
    <ImageBackground source={require('../../../assets/abelha2.png')} style={styles.container}>
      <BarraDeBusca
        onChangeText={(text) => onChangeText(text)}
        placeholder="Faça sua busca aqui"
        value={searchText}
        botao={() =>
          buscar(searchText, "Artigo")}
      />
      <StatusBar style="auto" />

      <FlatList
        style={styles.flatList}
        contentContainerStyle={
          styles.flatListContainer
        }
        columnWrapperStyle={{ alignContent: "space-around" }}
        data={itensMenu}
        numColumns={2}
        renderItem={({ item }) => (
          <MenuItem titulo={item.titulo}
            icone={item.icone}
            onPress={() => navegar(item.tag)} />
        )}
        keyExtractor={(item) => item.titulo}
      />

    </ImageBackground >

  );
}
