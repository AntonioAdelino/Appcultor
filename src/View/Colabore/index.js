import React from 'react';
import { Alert, View, Text, Linking, TouchableHighlight} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
import styles from './styles'


export default function Colabore(){
    const [checked, setChecked] = React.useState('Comentário');
    const [nome, setNome] = React.useState('');
    const [comentario, setComentario] = React.useState('');
    const email = "marcelo.milfont@ufape.edu.br";

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
        Linking.openURL(`mailto:${email}?subject=${checked} - App Appcultor
            &body=Nome do usuário:\n ${nome}\n\n${checked}:\n${comentario}`)}


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

                        <Text style={styles.text}>Comentário sobre o aplicativo</Text>
                </View>


                

                <View style={styles.radioButtonContainer}>
                    <RadioButton
                        value="Conteudo"
                        color= "#f7b20d"
                        status={ checked === 'Conteudo' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('Conteudo')}
                    />
                    <Text style={styles.text}>Contribuição em conteúdo</Text>
                </View>

            </View>

            <View style={{flex: 2}}>
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

            <View style={{flex: 1, marginVertical: 4, }}>
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
                onPress={navigationAlert} >
                    <Text style={{color: "#fff"}}>Enviar</Text>
            </TouchableHighlight>
            
            
        </View>
    )
}