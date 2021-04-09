import config from "../Config";

const raiz = `${config.SERVER_ADRESS}api/flower/`;

export default async function buscarFlor(texto) {
    /**
     * Se há um texto recebido, a busca é efetuada e retornada
     * Se não há, é retornada a listagem de todas as flores
    */

    if (texto == null) {
        return await listarTodas();
    } else {
        return await buscarNaApi(texto)
    }


}

async function listarTodas() {
    return fetch(raiz)
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

}


async function buscarNaApi(texto) {
    const busca = raiz + "searchFlower?text=" + texto

    return fetch(busca)
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


}