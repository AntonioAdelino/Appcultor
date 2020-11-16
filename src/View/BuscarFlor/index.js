import { StatusBar } from "expo-status-bar";
import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import BarraDeBusca from "../../Components/barraDeBusca";
import styles from "./styles";
import ListItem from "../../Components/listItem"
import buscarFlor from "../../Controllers/controladorFlor"


let separaTags = (tags) => tags.join(", ");

export default class BuscarFlor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textoProcurado: null,
      carregando: true,
      flores: [],
      erro: null,
    };
    //Bind necessário para possibilitar que a função altere o estado do componente
    this.mudarTexto = this.mudarTexto.bind(this)
  }

  /*********************************************************************************
   * Navegação
   * ********************************************************************************
   */

  navegar(item) {
    // Renomeia o item da lista para "flor" e navega para a tela Flor com ele
    const { navigation } = this.props;
    const flor = item;
    navigation.navigate("Flor", { flor });

  }
  /*********************************************************************************
  * Mudanças no estado / Solicitação API 
  * ********************************************************************************
  */

  buscarNaApi() {
    /**
   * Realiza a busca na api conforme o estado do textoProcurado
   * Atualiza flores com o resultado da api
   * Atualiza o andamento do carregamento
   */
    const { flores, carregando, erro, textoProcurado } = this.state;

    const { route } = this.props;
    let pesquisa = textoProcurado;

    buscarFlor(pesquisa)
      .then(data => this.setState({ flores: data, carregando: false }))
      .catch(erro => this.setState({ erro: erro, carregando: false }))
  }

  mudarTexto(texto) {
    this.setState({ textoProcurado: texto })
  }
  /*********************************************************************************
   * Estados do Componente
   * ********************************************************************************
   */

  /**
   * Metodo Do Ciclo de vida do Componente
   * Ele é chamado logo após a criação do componente.
   * Requisições a Api devem ser realizadas neste método
  */
  componentDidMount() {
    this.buscarNaApi()

  }
  /************************************************************************************
   *  Telas
   * **********************************************************************************
   */

  mostrarErro() {
    return this.state.erro.message
  }

  render() {

    const { flores, carregando, erro, textoProcurado } = this.state;

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

    //Tela Pincipal
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />

        <BarraDeBusca
          onChangeText={this.mudarTexto}
          placeholder="Buscar Flor"
          value={textoProcurado}
          botao={() =>
            this.buscarNaApi()} />

        <FlatList
          style={styles.flatList}
          data={flores}
          renderItem={({ item }) => (
            <ListItem title={`${separaTags(item.names)}`}
              type="flor"
              imagem={{ uri: 'http://chaves.rcpol.org.br/resized/eco-0B0nUXAibCfVGaG16V25lelljMHM.jpeg' }}
              preview={item.scientificName}
              tags={`Recursos Florais: ${separaTags(item.flowerResources)}`}
              onPress={() => this.navegar(item)} />
          )}
          keyExtractor={(item) => item._id}
        />
      </View>
    );

  }




}
