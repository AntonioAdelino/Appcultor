import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
        backgroundColor: "#f9f9ff",
        justifyContent: "space-between",
        alignItems: "stretch"
    },
    containerSelecao:{
        flex: 0,
        width: 300,
        height: 100

    },
    radioButtonContainer:{
        flex:1,
        flexDirection:"row",
        alignItems:'center'

    },
    inputComentario:{
        flex: 2,
        padding: 6,
        borderRadius: 1,
        borderWidth: 2,
        borderColor:"gray",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        textAlign: "left",
        textAlignVertical: 'top'
    },
    inputNome:{
        flex: 0,
        padding: 6,
        borderRadius: 1,
        borderWidth: 2,
        borderColor:"gray"
    },   
    text: {
        flex: 0,
        fontSize: 14,
        color: "#000",
        textAlign: "left"
    },
    title:{
        flex: 0,
        flexWrap:"nowrap",
        fontSize: 18,
        color:"#f7b20df5"
    },
    botao:{
        alignSelf: "flex-end",
        width: 100,
        height: 40,
        backgroundColor:"#f7b20d",
        alignItems: "center",
        justifyContent: "center"
    }
})

export default styles;
