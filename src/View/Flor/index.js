import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View , ScrollView, ToastAndroid} from "react-native";
import { FlatListSlider } from 'react-native-flatlist-slider';
import styles from "./styles";

let separaArray = (nomes) => nomes.join(", ");

function validarNomeFlor(texto){
  if(texto[0] == ""){
    return "Nenhum nome cadastrado"
  }else{
    return separaArray(texto);
  }
}




export default function Flor({ route }) {
  const florRecebida = route.params.flor;
  const images = florRecebida.images.map(imagem => ({ key: imagem, image: imagem }));

  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      `Fonte da Imagem: ${florRecebida.reference}`,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
    );
  };

  let imagens;

  if (images.length > 0) {
    imagens = <FlatListSlider
      data={images}
      imageKey={images.key}
      height={200}
      timer={5000}
      local={false}
      onPress={(item)=> showToastWithGravity()}
      contentContainerStyle={{ paddingHorizontal: 0, flex: 0 }}
      indicatorContainerStyle={{ marginBottom: 15 }}
      indicatorActiveColor={'#ffbe00'}
      indicatorInActiveColor={'#000'}
      indicatorActiveWidth={30}
      animation
    />
    

  } else {
    imagens = <View></View>
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        <View style={styles.titleContainer}>

          <Text style={styles.title} id="title">
            {florRecebida.scientificName}
          </Text>
        </View>

        {imagens}
        <View style={styles.imageCredits}>
            <Text style={styles.imageCreditsText}>Fonte da Imagem: {florRecebida.reference}</Text> 
          </View>

        <View style={styles.body} >
          <Text style={styles.header}>
            Nomes:
          </Text>
          <Text style={styles.text}>
            {validarNomeFlor(florRecebida.names)}
          </Text>

          <Text style={styles.header}>Familia:</Text>

          <Text style={styles.text}>{florRecebida.family}</Text>

        </View>
      </ScrollView>

      <View style={styles.bottomContainer}>
        <Text style={styles.bottomContainerText} id="tag">
          Recursos: {separaArray(florRecebida.flowerResources)}
        </Text>
      </View>

    </View>
  );
}
