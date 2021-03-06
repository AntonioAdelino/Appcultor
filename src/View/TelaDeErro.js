import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"

    },
    texto: {
        color: "#4e4e4e",
        fontSize: 18,
        textAlign: "center",
        marginHorizontal: 14,
        marginTop: 10,
        marginBottom: 12

    },
    imagem: {
        flex: 1,
        flexBasis: 150,
        maxWidth: 200,
        maxHeight: 200,
        flexWrap: "wrap",
    },
    botao: {
        flex: 1,
        backgroundColor: "#ffbe00",
        justifyContent: "center",
        marginTop: 30,
        maxWidth: 200,
        maxHeight: 45,
        elevation: 6

    },
    textoBotao: {
        flex: 0,
        fontSize: 16,
        flexDirection: "row",
        color: "#fff",
        width: 150,
        textAlign: "center"


    }

});



export default class TelaDeErro extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        //Tela exibida quando Houver Erros de Solicitação na API
        if (this.props.erro) {
            return (
                <View style={styles.container}>
                    <Image
                        style={styles.imagem}
                        source={require("../../assets/erro.png")} />
                    <Text style={styles.texto}>
                        {this.props.mensagem}
                    </Text>
                    <TouchableOpacity
                        style={styles.botao}
                        onPress={this.props.botao}>

                        <Text style={styles.textoBotao}>
                            {this.props.mensagemBotao}
                        </Text>

                    </TouchableOpacity>
                </View>

            )
        }


        //Tela para buscas mão encontradas
        return (
            <View style={styles.container}>
                <Image
                    style={styles.imagem}
                    source={require("../../assets/erro.png")} />
                <Text style={styles.texto}>
                    {this.props.mensagem}
                </Text>
            </View>
        );


    }

}
