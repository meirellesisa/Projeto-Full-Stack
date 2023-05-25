import config from "./config.json" assert { type: "json" };

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

const cadastroButton = document.getElementById("cadastrar");
cadastroButton.addEventListener("click", (event) =>  cadastroProdutos(event));

function cadastroProdutos(event) {
  let url = `${config.api_url}/produtos`
  let nome = document.getElementById("nome").value
  let descricao = document.getElementById("descricao").value
  let preco = document.getElementById("preco").value

  const corpo = {
    nome: nome,
    descricao: descricao,
    preco: Number(preco),
  }

  fazPost(url, corpo)
  alert("Produto cadastrado com sucesso")
}
