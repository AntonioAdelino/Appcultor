import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, Image, View, ToastAndroid } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 0.01,
        flexBasis: 50,
        flexDirection: "row",
        paddingTop: 0,
        paddingHorizontal: 2,
        padding: 6,
        marginBottom: 3,
        backgroundColor: "#f7b20d"

    },
    textInput: {
        flex: 1,
        flexGrow: 8,
        paddingHorizontal: 6,
        marginStart: 2,
        marginBottom: 0,
        backgroundColor: "#fff",
        flexWrap: "nowrap",
        borderColor: "#0f0f0f",
        borderRightWidth: 0,
        borderWidth: 1,
    },
    button: {
        flex: 1.5,
        alignItems: "center",
        marginEnd: 2,
        justifyContent: "center",
        backgroundColor: "#fff",
        borderLeftWidth: 0,
        borderColor: "#0f0f0f",
        borderWidth: 1
    },
    image: {
        tintColor: "#000",
    }


});



export default class BarraDeBusca extends React.Component {
    constructor(props) {
        super(props)
    }

    /********************************************************************************
     *  Validação do Texto de Busca
     ********************************************************************************
     */
    validarEntrada(acao) {
        let textoDeBusca = this.props.value;

        if (textoDeBusca == null) {
            this.exibirToastErro();
        } else {
            if (textoDeBusca.trim() == null || textoDeBusca.trim() == "") {
                this.exibirToastErro()
            } else {
                acao();
            }

        }
    }

    exibirToastErro() {
        ToastAndroid.showWithGravity(
            "Insira algo a ser buscado!",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
    }

    /********************************************************************************
     *  Retorno
     ********************************************************************************
     */
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={this.props.onChangeText}
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() =>
                        this.validarEntrada(this.props.botao)}>

                    <Image style={styles.image} source={require('../../assets/lupa.png')} />
                </TouchableOpacity>

            </View>

        )

    }
}