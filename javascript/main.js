function buscarProduto() {
  event.preventDefault()
  let id = document.getElementById("nome").value

  fetch(`http://localhost:3000/produtos/${id}`)
    .then((resposta) => {
      return resposta.json()
    })
    .then((corpo) => {
      console.log(corpo)
      let tbody1 = document.getElementById("tbody1")
      tbody1.innerText = ""

      let tr = tbody1.insertRow()
      let td_id = tr.insertCell()
      let td_nome = tr.insertCell()
      let td_descricao = tr.insertCell()
      let td_preco = tr.insertCell()

      td_id.innerText = corpo._id
      td_nome.innerText = corpo.nome
      td_descricao.innerText = corpo.descricao
      td_preco.innerText = corpo.preco
    })
}

let url = "http://localhost:3000/produtos"

function fazGet(url) {
  fetch(url)
    .then((resposta) => {
      return resposta.json()
    })
    .then((corpo) => {
      console.log(corpo)
      tamanho = corpo.length

      let tbody = document.getElementById("tbody")
      for (let i = 0; i < tamanho; i++) {
        let tr = tbody.insertRow()

        let td_id = tr.insertCell()
        let td_nome = tr.insertCell()
        let td_descricao = tr.insertCell()
        let td_preco = tr.insertCell()

        td_id.innerText = corpo[i]._id
        td_nome.innerText = corpo[i].nome
        td_descricao.innerText = corpo[i].descricao
        td_preco.innerText = corpo[i].preco
      }
    })
}
fazGet(url)
