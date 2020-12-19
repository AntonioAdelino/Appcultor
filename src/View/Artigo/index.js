import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { WebView } from 'react-native-webview';
import styles from "./styles";

let separaTags = (tags) => tags.join(", ");

export default function Artigo({ route }) {
  const artigoRecebido = route.params.artigo;

  const html = `
      ${artigoRecebido.content}
  `

  const stylizedHtml = `
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

      <link href="https://getbootstrap.com/docs/4.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
      
      <!-- Documentation extras -->
      <link href="https://getbootstrap.com/docs/4.1/assets/css/docs.min.css" rel="stylesheet">

      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Langar&display=swap" rel="stylesheet">

      <style type="text/css">
        img{
            max-width: 100%;
        }
      </style>
    
    </head>
  
    <body>
        <div class="container-fluid">
          <div class="row flex-xl-nowrap">
            <main class="col-12 col-md-12 col-xl-8 py-md-3 pl-md-5" role="main">
              ${html}
            </main>
          </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://getbootstrap.com/docs/4.1/assets/js/vendor/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script><script src="https://getbootstrap.com/docs/4.1/dist/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script><script src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js"></script><script src="https://getbootstrap.com/docs/4.1/assets/js/docs.min.js"></script>
    </body>
  </html>
  `;

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.titleContainer}>
        <Text style={styles.title} id="title">
          {artigoRecebido.title}
        </Text>
      </View>

      <WebView
        source={{
          html: stylizedHtml,
        }}
        androidHardwareAccelerationDisabled={true}
        style={{ flex: 8, marginTop: 20 }}
      />

      <View style={styles.tagsContainer}>
        <Text style={styles.tags} id="tag">
          Tags: {separaTags(artigoRecebido.tags)}
        </Text>
      </View>
    </View>
  );
}
