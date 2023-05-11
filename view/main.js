const apiUrl = 'https://31d582ed-bc29-4874-ad2e-e8e756e26b49.id.repl.co'

function listarProdutos() {
  fetch(`${apiUrl}/produtos`)
    .then(resposta => {
      return resposta.json()
    })
    .then(corpo => {
      let produtosSize = corpo.produtos.length
      let produtos = corpo.produtos



      console.log(corpo.produtos)


      document.getElementById('id-0').innerHTML = corpo.produtos[0].id
      document.getElementById('nome-0').innerHTML = corpo.produtos[0].nome
      document.getElementById('descricao-0').innerHTML = corpo.produtos[0].descricao

      document.getElementById('id-1').innerHTML = corpo.produtos[1].id
      document.getElementById('nome-1').innerHTML = corpo.produtos[1].nome
      document.getElementById('descricao-1').innerHTML = corpo.produtos[1].descricao


      document.getElementById('id-2').innerHTML = corpo.produtos[2].id
      document.getElementById('nome-2').innerHTML = corpo.produtos[2].nome
      document.getElementById('descricao-2').innerHTML = corpo.produtos[2].descricao


      document.getElementById('id-3').innerHTML = corpo.produtos[3].id
      document.getElementById('nome-3').innerHTML = corpo.produtos[3].nome
      document.getElementById('descricao-3').innerHTML = corpo.produtos[3].descricao


      document.getElementById('id-4').innerHTML = corpo.produtos[4].id
      document.getElementById('nome-4').innerHTML = corpo.produtos[4].nome
      document.getElementById('descricao-4').innerHTML = corpo.produtos[4].descricao

    })
}

window.onload = function() {

  listarProdutos()
  
};
