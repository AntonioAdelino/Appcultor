import { StatusBar } from "expo-status-bar";
import React from "react";
import { ActivityIndicator, StyleSheet, Text, View, TouchableWithoutFeedback, ToastAndroid } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import styles from "./styles";
import ListItem from "../../Components/listItem"
import buscarFlor from "../../Controllers/controladorFlor"


let separaTags = (tags) => tags.join(", ");

export default class BuscarFlor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      carregando: true,
      flores: [],
      erro: null,
    };
  }

  // Renomeia o item da lista para "flor" e navega para a tela Flor com ele
  navegar(item) {
    const { navigation } = this.props;
    const flor = item;
    navigation.navigate("Flor", { flor });

  }
  mostrarErro() {
    return this.state.erro.message
  }

  render() {

    const { flores, carregando, erro } = this.state;

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
          data={flores}
          renderItem={({ item }) => (
            <ListItem title={item.scientificName}
              imagem={{ uri: 'http://chaves.rcpol.org.br/resized/eco-0B0nUXAibCfVGaG16V25lelljMHM.jpeg' }}
              tags={`Nomes populares: ${separaTags(item.names)}`}
              onPress={() => this.navegar(item)} />
          )}
          keyExtractor={(item) => item._id}
        />
      </View>
    );

  }

  componentDidMount() {
    const { flores, carregando, erro } = this.state;

    const { route } = this.props;
    let pesquisa = route.params.textoProcurado;
    console.log(`Termo pesquisado: ${pesquisa}`);



    buscarFlor(pesquisa)
      .then(data => this.setState({ flores: data, carregando: false }))
      .catch(erro => this.setState({ erro: erro, carregando: false }))

  }


}
