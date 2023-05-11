const express = require('express')

const router = express.Router()

router.get('/', (requisicao, resposta, depois) => {
  resposta.status(200).send({

    produtos: [
      {
        id: 1,
        nome: 'Jaleco',
        descricao:
          'Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes',
        preço: 'R$ 999,99'
      },
      {
        id: 2,
        nome: 'Avental',
        descricao:
          'Avental de alta qualidade fabricado para atender aos clientes mais exigentes',
        preço: 'R$ 999,99'
      },
      {
        id: 3,
        nome: 'Touca',
        descricao:
          'Touca de alta qualidade fabricado para atender aos clientes mais exigentes',
        preço: 'R$ 999,99'
      },
      {
        id: 4,
        nome: 'Toalha',
        descricao:
          'Toalha de alta qualidade fabricado para atender aos clientes mais exigentes',
        preço: 'R$ 999,99'
      },
      {
        id: 5,
        nome: 'Roupa de Banho',
        descricao:
          'Roupa de banho de alta qualidade fabricado para atender aos clientes mais exigentes',
        preco: 'R$ 590'
      }
    ]
  })
})

router.get('/:id_produto', (requisicao, resposta, depois) => {
  const id = requisicao.params.id_produto

  if (id === 'especial') {
    resposta.status(200).send({
      mensagem: 'Você decobriu o ID especial',
      id: id
    })
  } else {
    resposta.status(200).send({
      mensagem: 'Você passou um ID',
      id: id
    })
  }
})

router.post('/', (req, resposta, depois) => {

  const produto1 ={
    id: req.body.id,
    nome: req.body.nome,
    descricao: req.body.descricao,
    preco: req.body.preco
  }
  console.log(produto1);
  

  resposta.status(201).send({
    produtoCadastrado: produto1
  })
})

router.patch('/', (requisicao, resposta, depois) => {
  resposta.status(201).send({
    mensagem: 'Usando o verbo PATCH'
  })
})

router.delete('/', (requisicao, resposta, depois) => {
  resposta.status(200).send({
    mensagem: 'Usando o verbo DELETE'
  })
})

module.exports = router
