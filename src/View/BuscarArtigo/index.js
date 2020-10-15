import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import styles from "./styles";
import { useState } from "react";
import ListItem from "../../components/listItem"
import buscarArtigo from "../../Controllers/ControladorArtigo"

export default function BuscarArtigo({ route, navigation }) {
  const search = route.params?.searchText;


  

  const [articles, setArticles] = useState([]);
   console.log(articles)

  let dados = buscarArtigo("Ipsum");
  dados.then(function(lista) {
    setArticles(lista);
  });

  useEffect(() =>{
    buscarArtigo("Ipsum").then(
      response =>{
        setArticles(response)
      }
    )

  }, [])
  console.log(articles)

  const itemListTouch = (item) => {

    const receivedObject = item;
    navigation.navigate("Artigo", { receivedObject });
    
  };

  const separaTags = (tags) => tags.join(" ");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        style={styles.flatList}
        data={articles}
        renderItem={({ item }) => (
          <ListItem title ={item.title} 
            tags = {`Tags: ${separaTags(item.tags)}`} 
            onPress={() => itemListTouch(item)}/>
        )}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
}
