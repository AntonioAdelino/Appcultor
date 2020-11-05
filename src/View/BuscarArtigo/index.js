import { StatusBar } from "expo-status-bar";
import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import styles from "./styles";
import ListItem from "../../Components/listItem"
import buscarArtigo from "../../Controllers/controladorArtigo"

let separaTags = (tags) => tags.join(" ");

export default class BuscarArtigo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      carregando: true,
      artigos: [],
      erro: null,
    };
  }

  // Renomeia o item da lista para "artigo" e navega para a tela artigo com ele
  navegar(item) {
    const { navigation } = this.props;
    const artigo = item;
    navigation.navigate("Artigo", { artigo });

  }
  mostrarErro() {
    return this.state.erro.message
  }

  render() {

    const { artigos, carregando, erro } = this.state;

    //Carregando
    if (carregando) {
      return <ActivityIndicator style={styles.carregando} size="large" color="#ffbe00" />
    }

    //Tela de erros
    if (erro) {
      return (
        <View style={styles.container}>
          <Text>
            Erro ao solicitar artigo:
            {this.mostrarErro()}
          </Text>
        </View>
      )
    }
    //Tela Esperada se nao houver erros
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <FlatList
          style={styles.flatList}
          data={artigos}
          renderItem={({ item }) => (
            <ListItem title={item.title}
              imagem={require("../../../assets/iconeAbelha.png")}
              preview={item.content}
              tags={`Tags: ${separaTags(item.tags)}`}
              onPress={() => this.navegar(item)} />
          )}
          keyExtractor={(item) => item._id}
        />
      </View>
    );

  }

  componentDidMount() {
    const { artigos, carregando, erro } = this.state;

    const { route } = this.props;
    let pesquisa = route.params.textoProcurado;

    buscarArtigo(pesquisa)
      .then(data => this.setState({ artigos: data, carregando: false }))
      .catch(erro => this.setState({ erro: erro, carregando: false }))

  }


}
