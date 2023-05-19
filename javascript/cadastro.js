function fazPost(url, corpo) {
  fetch(url, {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(corpo),
    headers: {
      "Access-Control-Allow-Headers": "*",
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json()
  })
}

function cadastroProdutos() {
  let url = "http://localhost:3000/produtos"
  let nome = document.getElementById("nome").value
  let descricao = document.getElementById("descricao").value
  let preco = document.getElementById("preco").value

  corpo = {
    nome: nome,
    descricao: descricao,
    preco: Number(preco),
  }

  fazPost(url, corpo)
  alert("Produto cadastrado com sucesso")
}
