import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

export default function LuzVermelha(){
    return(
        <View style={{flex: 1, backgroundColor:"#ff0000"}}>
            <StatusBar
                backgroundColor="#ff0000"
                style="light"
            />
        </View>
    )
}