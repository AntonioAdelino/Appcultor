import config from "../Config";

export default async function buscarArtigo(texto, tag) {
    /*
    * Controller para tratamento solicitações ao server relacionadas aos artigos.
    * IP Server =   173.82.232.87
    * Porta 3001
    */
   if(tag === "Glossário"){
       return await buscarTodos();
   }

    if (texto == null && tag != null) {
        return await buscarPorTag(tag)

    } else if (texto != null && tag == null) {
        return await buscarPorTexto(texto)

    } else if (texto != null && tag != null) {
        /**
         * Faz a busca na API usando a tag
         * Faz a filtragem local com o parametro recebido no texto
         * Retorna o resultado da busca dentro de uma tag
        */
        const data = await buscarPorTag(tag);
        const search = texto;
        const result = data.filter(obj => {
            return obj.title.match(new RegExp(`${search}`)) || (obj.tags.filter(tag => { return tag.match(search) }).length > 0);
        })
        return result

    } else{
        return await buscarTodos();
    }

}
//Ip para teste Local
const raiz = `${config.SERVER_ADRESS}api/article/`;


async function buscarTodos(){
    return fetch(raiz)
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


async function buscarPorTexto(texto) {
    return fetch(raiz + "searchArticle?text=" + texto)
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

async function buscarPorTag(tag) {

    return fetch(raiz + "?tags=" + tag)
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
