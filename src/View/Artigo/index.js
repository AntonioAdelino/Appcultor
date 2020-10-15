import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styles from "./styles";

export default function Artigo({ route }) {
  const articleObject = route.params.receivedObject;
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {console.log(articleObject)}

      <Text style={styles.title} id="title">
        {articleObject.title}
      </Text>

      <Text style={styles.article}>{articleObject.content}</Text>

      <Text style={styles.tags} id="tag">
        {articleObject.tags}
      </Text>
    </View>
  );
}
