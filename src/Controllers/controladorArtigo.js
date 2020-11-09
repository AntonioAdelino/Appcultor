export default async function buscarArtigo(texto, operacao) {
    /*
    * Controller para tratamento solicitações ao server relacionadas aos artigos.
    * IP Server =   173.82.232.87
    * Porta 3001
    */


    let op = "";

    let buscarArtigo = "searchArticle?text=" + texto;
    let buscarTag = "?tags=" + texto;

    if (operacao === "busca") {
        op = buscarArtigo;
    } else {
        op = buscarTag;
    }


    let raiz = "http://173.82.232.87:3001/api/article/";

    let final = raiz + op;

    //pesquisa de acordo com a raiz e operação escolhida
    console.log("Fetch: ", final)
    return fetch(final)
        .then(response => {
            // valida se a requisição falhou
            if (!response.ok) {
                console.log(response.body)
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