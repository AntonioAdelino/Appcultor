import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, ScrollView } from "react-native";
import styles from "./styles";

let separaTags = (tags) => tags.join(", ");

export default function Artigo({ route }) {
  const artigoRecebido = route.params.artigo;
  return (
    <View style={styles.container}>
      <StatusBar style="light" />


      <ScrollView style={styles.articleContainer}>
        <View style={styles.titleContainer}>

          <Text style={styles.title} id="title">
            {artigoRecebido.title}
          </Text>
        </View>

        <Text style={styles.article}>{artigoRecebido.content}</Text>

      </ScrollView>

      <View style={styles.tagsContainer}>

        <Text style={styles.tags} id="tag">
          Tags: {separaTags(artigoRecebido.tags)}
        </Text>
      </View>
    </View>
  );
}
