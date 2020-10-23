import { ToastAndroid } from "react-native"

export default async function buscarArtigo(texto) {

    return fetch("http://173.82.232.87:3001/api/article/searchArticle?text=" + texto)
        .then(response => {
            // valida se a requisição falhou
            if (!response.ok) {
                return new Error('falhou a requisição') // cairá no catch da promise
            }

            // verificando pelo status
            if (response.status === 404) {
                return new Error('não encontrou qualquer resultado')
            }

            // retorna uma promise com os dados em JSON
            return response.json()
        })


    // Comando usado para implementação inicial
    //.then(res => res.json())

}