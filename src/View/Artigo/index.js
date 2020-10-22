import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default function Artigo({ route }) {
  const artigoRecebido = route.params.artigo;
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* {console.log(artigoRecebido)} */}

      <Text style={styles.title} id="title">
        {artigoRecebido.title}
      </Text>

      <Text style={styles.article}>{artigoRecebido.content}</Text>

      <Text style={styles.tags} id="tag">
        {artigoRecebido.tags}
      </Text>

    </View>
  );
}
