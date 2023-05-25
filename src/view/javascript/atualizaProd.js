import config from "./config.json" assert { type: "json" };

function fazUpdate(url, corpo) {
  fetch(url, {
    method: "PUT",
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

const updateButton = document.getElementById("update");
updateButton.addEventListener("click", (event) => updateProdutos(event));

function updateProdutos(event) {
  event.preventDefault()
  let id = document.getElementById("id").value
  let nome = document.getElementById("nome").value
  let descricao = document.getElementById("descricao").value
  let preco = document.getElementById("preco").value
  let corpo;
  
  let url = `${config.api_url}/produtos/${id}`

  if (nome !== "" && descricao !== "" && preco !== "") {
    corpo = {
      nome: nome,
      descricao: descricao,
      preco: preco,
    }
  } else if (nome !== "" && descricao !== "" && preco === "") {
    corpo = {
      nome: nome,
      descricao: descricao,
    }
  } else if (nome !== "" && descricao === "" && preco !== "") {
    corpo = {
      nome: nome,
      preco: preco,
    }
  } else if (nome === "" && descricao !== "" && preco !== "") {
    corpo = {
      descricao: descricao,
      preco: preco,
    }
  } else if (nome === "" && descricao == "" && preco == "") {
  }

  fazUpdate(url, corpo)
  alert("Produto atualizado com sucesso")
}
