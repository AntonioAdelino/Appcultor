export default async function buscarArtigo(texto){
 
return fetch("http://173.82.232.87:3001/api/article/searchArticle?text="+texto)
  .then(res => res.json())
  


  //fazendo consulta na api
  /*var request = await fetch("http://173.82.232.87:3001/api/article/searchArticle?text="+texto)
  var resposta = await request.json();
  
  
  return resposta;*/
}