import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, ActivityIndicator } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import MenuItem from "../../Components/menuItem";
import BarraDeBusca from "../../Components/barraDeBusca";
import carregarMenu from "../../Controllers/controladorMenuInicial";
import styles from "./styles";
import TelaDeErro from "../TelaDeErro"

export default class TelaInicial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textoProcurado: null,
      carregando: true,
      categorias: [],
      erro: null,
    };
    //Bind necessário para possibilitar que a função altere o estado do componente
    this.mudarTexto = this.mudarTexto.bind(this)
  }

  /*********************************************************************************
   * Estados do Componente
   * ********************************************************************************
   */

  componentDidMount() {
    this.carregarTelaInicial()
  }

  /*********************************************************************************
   * Navegação
   * ********************************************************************************
   */

  //Cuida das buscas
  buscarArtigo(textoProcurado) {
    const { navigation } = this.props;
    navigation.navigate("BuscarArtigo", { textoProcurado })

  }

  navegar(tag) {
    const { navigation } = this.props;
    if (tag === "Flora apícola") {
      navigation.navigate("BuscarFlor");
    } else if(tag === "Info"){
      navigation.navigate("Info");
    } else if(tag === "Luz Vermelha"){
        navigation.navigate("Luz Vermelha")
    }else {
      navigation.navigate("BuscarArtigo", { tag });
    }

  }


  /*********************************************************************************
   * Mudanças no estado / Solicitação API 
   * ********************************************************************************
   */

  mudarTexto(texto) {
    this.setState({ textoProcurado: texto })
  }

  carregarTelaInicial() {
    const { categorias, carregando, erro } = this.state;

    this.setState({ erro: false, carregando: true })

    carregarMenu()
      .then(data => this.setState({ categorias: data, carregando: false }))
      .catch(erro => this.setState({ erro: erro, carregando: false }))
  }


  mostrarErro() {
    return this.state.erro.message
  }


  /*********************************************************************************
   * Telas
   * ********************************************************************************
   */

  render() {
    const { categorias, carregando, erro, textoProcurado } = this.state;

    //Carregando
    if (carregando) {
      return <ActivityIndicator style={styles.carregando} size="large" color="#ffbe00" />
    }

    //Tela de erros
    if (erro || categorias.length == 0) {
      return (
        <TelaDeErro
          //A tela de erro recebe um erro ou true para saber q está lidando com um problema
          // Passando, false ou ignorando o parametro fará com q n seja exibido um botão para chamar a função.
          erro={erro}
          mensagem="Erro! Verifique sua conexão com a internet e tente novamente"
          mensagemBotao="Tentar novamente"
          botao={() => { this.carregarTelaInicial() }} />
      )
    } else {
      return (
        <ImageBackground source={require('../../../assets/abelha2.png')} style={styles.container}>
          <BarraDeBusca
            onChangeText={this.mudarTexto}
            placeholder="Faça sua busca aqui"
            value={textoProcurado}
            botao={() =>
              this.buscarArtigo(textoProcurado)}
          />
          <StatusBar style="light" />

          <FlatList
            style={styles.flatList}
            contentContainerStyle={
              styles.flatListContainer
            }
            columnWrapperStyle={{ alignContent: "space-around" }}
            data={categorias}
            numColumns={2}
            renderItem={({ item }) => (
              <MenuItem titulo={item.title}
                icone={item.image}
                onPress={() => this.navegar(item.tag)} />
            )}
            keyExtractor={(item) => item.title}
          />

        </ImageBackground >

      );

    }



  }


}
