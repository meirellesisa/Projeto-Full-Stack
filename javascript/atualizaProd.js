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

function updateProdutos() {
  let id = document.getElementById("id").value
  let nome = document.getElementById("nome").value
  let descricao = document.getElementById("descricao").value
  let preco = document.getElementById("preco").value

  let url = `http://localhost:3000/produtos/${id}`

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
}
