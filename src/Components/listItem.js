import React from "react";
import { StyleSheet, TouchableOpacity, Text, Image, View } from "react-native";


const styles = StyleSheet.create({
  principal: {
    flexWrap: "wrap",
    flexDirection: "row",
    marginHorizontal: 0,
    marginVertical: 0

  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    flexWrap: "wrap",
    marginTop: 10,
    marginHorizontal: 15

  },
  Artigo: {
    flex: 1,
    flexGrow: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    marginVertical: 4,
    borderRadius: 6,
    paddingTop: 6,
    paddingBottom: 12,
    paddingEnd: 30,
    borderBottomWidth: 0.03,
    borderBottomColor: "#FFE4B7",
  },
  title: {
    fontSize: 12,
    color: "#000",
    fontWeight: "bold",
    alignSelf: "flex-start",
    textTransform: "uppercase",
    marginBottom: 5,
  },
  preview: {
    fontSize: 10,
    color: "#4e4e4e",
    marginBottom: 5,

  },
  scientificName: {
    fontSize: 10,
    color: "#4e4e4e",
    marginBottom: 5,
    fontStyle: "italic"

  },
  tags: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#ffbe00",
  }
});


export default class ListItem extends React.Component {
  constructor(props) {
    super(props)
  }

  validarImagem() {
    if (this.props.imagem == null) {

      return require("../../assets/iconeAbelha.png");
    } else {

      return this.props.imagem;
    }

  }

  render() {
    const imagem = this.validarImagem()

    if (this.props.type === "flor") {

      return (
        <TouchableOpacity onPress={this.props.onPress} style={styles.principal}>
          <Image
            style={styles.logo}
            source={imagem} />
          <View style={styles.Artigo}>
            <Text style={styles.title}>{this.props.title}</Text>
            <Text numberOfLines={2} style={styles.scientificName}>{this.props.preview}</Text>
            <Text style={styles.tags}>{this.props.tags}</Text>
          </View>
        </TouchableOpacity>
      )

    } else {

      return (
        <TouchableOpacity onPress={this.props.onPress} style={styles.principal}>
          <Image
            style={styles.logo}
            source={imagem} />
          <View style={styles.Artigo}>
            <Text style={styles.title}>{this.props.title}</Text>
            <Text numberOfLines={2} style={styles.preview}>{this.props.preview}</Text>
            <Text style={styles.tags}>{this.props.tags}</Text>
          </View>
        </TouchableOpacity>

      )

    }


  }

}