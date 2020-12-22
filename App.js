import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StackAdmin from "./src/View/StackAdmin";
import {Provider} from 'react-native-paper';

export default function App() {
  return (
    <NavigationContainer>
      <Provider>
        <StackAdmin />
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
