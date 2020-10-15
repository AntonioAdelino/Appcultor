import React from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";


const styles = StyleSheet.create({

  ArticleContainer: {
    flex: 1,
    flexGrow: 1,
    padding: 16,
    alignItems: "flex-start",
    justifyContent: "center",
    marginVertical: 4,
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  title: {
    fontSize: 15,
    color: "#000",
    fontWeight: "bold",
    alignSelf: "flex-start",
    textTransform: "uppercase"
  },
  tags: {
    marginTop: 2,
    fontSize: 14,
    color: "#ffbe00",
  },
});

const ListItem = ({ onPress, title, tags, ...props }) => (
  <TouchableOpacity onPress={onPress} style={styles.ArticleContainer}>
    <Text style={styles.title}>{title}</Text>
    <Text style= {styles.tags}>{tags}</Text>
  </TouchableOpacity>
);

export default ListItem;
