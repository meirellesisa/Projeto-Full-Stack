
function fazPost(url, object){

    console.log("Body=", object)
    const body = JSON.stringify(object)
    let request = new XMLHttpRequest()
    request.open("POST", url)
    request.setRequestHeader("Content-Type", "application/json; charset=UTF-8")
    request.send(body)

    
    console.log(request)

    
    return request.responseText
}

function cadastroProdutos() {


    event.preventDefault()
    let url = "http://localhost:3000/produtos"
    let codigo = document.getElementById("codigo").value
    let nome = document.getElementById("nome").value
    let descricao = document.getElementById("descricao").value
    let preco = document.getElementById("preco").value
  
    console.log(codigo)
    console.log(nome)
    console.log(descricao)
    console.log(preco)
  
  
    body = {
      "id": codigo,
      "nome": nome,
      "descricao": descricao,
      "preco": preco
    }
  
    fazPost(url, body)
  
  
  }
