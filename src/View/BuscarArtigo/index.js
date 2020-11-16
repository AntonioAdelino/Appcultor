import { StatusBar } from "expo-status-bar";
import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import BarraDeBusca from "../../Components/barraDeBusca";
import styles from "./styles";
import ListItem from "../../Components/listItem"
import buscarArtigo from "../../Controllers/controladorArtigo"

let separaTags = (tags) => tags.join(", ");

export default class BuscarArtigo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textoProcurado: this.props.route.params.textoProcurado,
      carregando: true,
      artigos: [],
      erro: null,
    };
    //Bind necessário para possibilitar que a função altere o estado do componente
    this.mudarTexto = this.mudarTexto.bind(this)

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

  //Precisa de um bind para poder acessa e alterar o estato do componente e alterar ele.
  mudarTexto(texto) {
    this.setState({ textoProcurado: texto })
  }


  /* 
    Acessa o estado e o parametro da tag passada da tela inicial, e então chama o controlador
  */
  buscarNaApi() {
    const { artigos, textoProcurado, carregando, erro } = this.state;

    const { route } = this.props;
    const pesquisa = textoProcurado;
    const tag = route.params.tag;

    this.setState({ carregando: true, artigos: [] })

    buscarArtigo(pesquisa, tag)
      .then(data => this.setState({ artigos: data, carregando: false }))
      .catch(erro => this.setState({ erro: erro, carregando: false }))

  }
  /**
   * Metodo Do Ciclo de vida do Componente
   * Ele é chamado logo após a criação do componente.
   * Requisições a Api devem ser realizadas neste método
  */

  componentDidMount() {
    this.buscarNaApi()

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
        <StatusBar style="auto" title={this.props.tag} />
        <BarraDeBusca
          placeholder="Buscar artigo"
          onChangeText={this.mudarTexto}
          value={this.state.textoProcurado}
          botao={() =>
            this.buscarNaApi()} />
        <FlatList
          style={styles.flatList}
          data={artigos}
          renderItem={({ item }) => (
            <ListItem title={item.title}
              type="artigo"
              preview={item.content}
              tags={`Tags: ${separaTags(item.tags)}`}
              onPress={() => this.navegar(item)} />
          )}
          keyExtractor={(item) => item._id}
        />
      </View>
    );

  }



}
