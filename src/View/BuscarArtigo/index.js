import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import styles from "./styles";
import { useState } from "react";
import ListItem from "../../components/listItem"

export default function BuscarArtigo({ route, navigation }) {
  const search = route.params?.searchText;

  const [articles, setArticles] = useState([
    {
      id: "1",
      title: "What is Lorem Ipsum?",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      tags: ["Lorem Ipsum", "x", "y"],
      language: "English",
      author: "Autor",
    },
    {
      id: "2",
      title: "What is Lorem Ipsum 2?",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      tags: ["Lorem Ipsum", "x", "y"],
      language: "English",
      author: "Autor",
    },
    {
      id: "3",
      title: "What is Lorem Ipsum 3?",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      tags: ["Lorem Ipsum", "x", "y"],
      language: "English",
      author: "Autor",
    },
  ]);

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
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
