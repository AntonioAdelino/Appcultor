import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, ActivityIndicator, View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import MenuItem from "../../Components/menuItem";
import BarraDeBusca from "../../Components/barraDeBusca";
import carregarMenu from "../../Controllers/controladorMenuInicial";
import styles from "./styles";

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
    } else {
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

    return (
      <ImageBackground source={require('../../../assets/abelha2.png')} style={styles.container}>
        <BarraDeBusca
          onChangeText={this.mudarTexto}
          placeholder="Faça sua busca aqui"
          value={textoProcurado}
          botao={() =>
            this.buscarArtigo(textoProcurado)}
        />
        <StatusBar style="auto" />

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
