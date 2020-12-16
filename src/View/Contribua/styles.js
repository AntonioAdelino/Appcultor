import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 15,
        backgroundColor: "#f9f9ff",
        justifyContent: "space-between",
        alignItems: "flex-start"
    },
    containerSelecao:{
        flex: 0,
        width: 300,
        height: 50

    },
    radioButton:{
        flex: 0,
        flexGrow: 0,
        flexDirection: "column",
        width: 10,
        height: 10,
        
    },
    radioButtonContainer:{
        flexDirection:"row",
        alignItems:'center'

    },
    inputComentario:{
        flex: 3,
        width: 300,
        minHeight:80,
        maxHeight: 200,
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
        flex: 0.5,
        width: 300,
        minHeight:40,
        maxHeight: 60,
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
