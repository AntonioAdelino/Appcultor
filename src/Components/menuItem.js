import React from "react";
import { StyleSheet, TouchableOpacity, Text, Image, View } from "react-native";


const styles = StyleSheet.create({
    principal: {
        flex: 1,
        alignItems: "center",
        marginHorizontal: 0,
        marginVertical: 4,
        padding: 4,
        borderRadius: 0
    },
    logo: {
        flexGrow: 0,
        flexBasis: 1,
        flex: 1,
        width: 100,
        height: 100,
        margin: 2,
        padding: 0,
        borderRadius: 0
    },
    titulo: {
        color: "#e2a90d",
        fontWeight: "bold"

    }

});
const MenuItem = ({ onPress, titulo, icone, ...props }) => (
    <TouchableOpacity onPress={onPress} style={styles.principal}>
        <Image style={styles.logo}
            resizeMode="contain"
            source={{ uri: icone }} />
        <Text style={styles.titulo} >{titulo} </Text>
    </TouchableOpacity>
);
export default MenuItem;