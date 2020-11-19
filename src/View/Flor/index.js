import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Text, View, ScrollView } from "react-native";
import styles from "./styles";

let separaArray = (nomes) => nomes.join(", ");

export default function Flor({ route }) {
  const florRecebida = route.params.flor;
  console.log(florRecebida)

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.titleContainer}>

        {console.log(florRecebida)}

        <Text style={styles.title} id="title">
          {florRecebida.scientificName}
        </Text>
      </View>

      <View style={styles.imageContainer}>
        <ScrollView
          scrollEventThrottle={200}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={true}
          horizontal
          pagingEnabled>
          {florRecebida.images.map((images) => {
            return (
              <Image
                key={images}
                style={styles.image}
                source={{ uri: images }}
              />
            );

          })}

        </ScrollView>
      </View>

      <View style={styles.body} >

        <Text style={styles.text} id="tag">
          Nomes: {separaArray(florRecebida.names)}.
        </Text>

        <Text style={styles.text}>Familia: {florRecebida.family}</Text>

      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.bottomContainerText} id="tag">
          Recursos Florais: {separaArray(florRecebida.flowerResources)}.
        </Text>
      </View>

    </View>
  );
}
