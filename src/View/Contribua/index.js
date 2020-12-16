import React from 'react';
import { Alert, View, Text, Linking, TouchableHighlight} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
import styles from './styles'


export default function Contribua(){
    const [checked, setChecked] = React.useState('Comentário');
    const [nome, setNome] = React.useState('');
    const [comentario, setComentario] = React.useState('');

    const navigationAlert= () =>
        Alert.alert(
            "Atenção",
            "Você pode anexar imagens no e-mail",
            [
            { text: 'OK', onPress: handlePress }
            ],
            { cancelable: true }
        );

    const handlePress = () =>{
        Linking.openURL(`mailto:support@example.com?subject=${checked} - App APPcultor&body=Nome do usuário:\n ${nome}\n\n${checked}:\n${comentario}`)}


    return(
        <View style={styles.container}>

            <View style={styles.containerSelecao}>

                <Text style={styles.title}>Estou ajudando com:</Text>

                <View style={styles.radioButtonContainer}>
                        <RadioButton
                            style ={styles.radioButton}
                            value="Comentário"
                            color= "#f7b20d"
                            status={ checked === 'Comentário' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('Comentário')}
                        />

                        <Text style={styles.text}>Comentario sobre o aplicativo</Text>
                </View>


                

                <View style={styles.radioButtonContainer}>
                    <RadioButton
                        style ={styles.radioButton}
                        value="Conteudo"
                        color= "#f7b20d"
                        status={ checked === 'Conteudo' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('Conteudo')}
                    />
                    <Text style={styles.text}>Contribuição em conteudo</Text>
                </View>

            </View>

            <View>
                <Text style={styles.title}>{checked}:</Text>
                <TextInput
                    style={styles.inputComentario}
                    value={comentario}
                    onChangeText={(text) => (setComentario(text))}
                    placeholder= {`Coloque aqui seu ${checked}`}
                    multiline
                    scrollEnabled={true}
                />
            </View>

            <View>
                <Text style={styles.title}>Nome: </Text>
                <TextInput
                    value={nome}
                    onChangeText={(text) => (setNome(text))}
                    placeholder="Insira seu nome"
                    style={styles.inputNome}
                />
            </View>

            <TouchableHighlight 
                style= {styles.botao}
                onPress={navigationAlert}
                    // Linking.openURL(`mailto:support@example.com?subject=${checked}&body=Nome: ${nome}\b\n${comentario}`) }
                    // title="support@example.com" 
                    >
                    <Text>Enviar</Text>
            </TouchableHighlight>
            
            
        </View>
    )
}