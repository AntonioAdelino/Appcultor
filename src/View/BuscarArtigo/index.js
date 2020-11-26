import { StatusBar } from "expo-status-bar";
import React from "react";
import { ActivityIndicator, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import BarraDeBusca from "../../Components/barraDeBusca";
import styles from "./styles";
import ListItem from "../../Components/listItem"
import buscarArtigo from "../../Controllers/controladorArtigo"
import TelaDeErro from "../TelaDeErro";

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

  /************************************************************************************
   * Navegação
   * **********************************************************************************
  */


  // Renomeia o item da lista para "artigo" e navega para a tela artigo com ele
  navegar(item) {
    const { navigation } = this.props;
    const artigo = item;
    navigation.navigate("Artigo", { artigo });

  }


  /************************************************************************************
   * Estados do Componente / Solicitações API
   * **********************************************************************************
  */

  componentDidMount() {
    this.buscarNaApi()

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

  //Precisa de um bind para poder acessa e alterar o estato do componente e alterar ele.
  mudarTexto(texto) {
    this.setState({ textoProcurado: texto })
  }

  mostrarErro() {
    return this.state.erro.message
  }



  /************************************************************************************
   *  Telas
   * **********************************************************************************
   */

  render() {

    const { artigos, carregando, erro } = this.state;

    //Carregando
    if (carregando) {
      return <ActivityIndicator style={styles.carregando} size="large" color="#ffbe00" />
    }

    //Tela de erros
    if (erro) {
      return (
        <TelaDeErro
          //A tela de erro recebe um erro ou true para saber q está lidando com um problema
          // Passando, false ou ignorando o parametro fará com q n seja exibido um botão para chamar a função.
          erro={erro}
          mensagem="Erro! Verifique sua conexão com a internet e tente novamente"
          mensagemBotao="Tentar novamente"
          botao={() => { this.buscarNaApi() }} />
      )
    }
    /************************************************************************************
   *  Tela Principal
   * **********************************************************************************
   */

    let resultadoDaBusca;
    if (artigos.length == 0) {
      resultadoDaBusca = <TelaDeErro mensagem={"Nenhum resultado, \nVerifique sua busca"} />

    } else {
      resultadoDaBusca =
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
        />;
    }

    return (
      <View style={styles.container}>
        <StatusBar style="light" title={this.props.tag} />
        <BarraDeBusca
          placeholder="Buscar artigo"
          onChangeText={this.mudarTexto}
          value={this.state.textoProcurado}
          botao={() =>
            this.buscarNaApi()} />

        {resultadoDaBusca}

      </View>
    );

  }



}
