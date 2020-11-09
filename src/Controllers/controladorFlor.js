export default async function buscarFlor(texto, operacao) {

    let busca = texto;
    let op = ""

    let buscarFlor = "searchFlower?text=" + busca

    if (operacao !== "inicial") {

        op = buscarFlor + busca
    }


    let raiz = "http://173.82.232.87:3001/api/flower/";

    //pesquisa de acordo com a raiz e operação escolhida
    return fetch(raiz + op)
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