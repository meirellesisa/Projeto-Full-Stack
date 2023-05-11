const express = require('express');
const app = express();
const morgan  = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');


const rotaProdutos = require('./routes/produtos');


app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
  })
)


//devemos declarar as rotas criadas AQUI!!
app.use('/produtos', rotaProdutos);

//quando não encotar rota
app.use((requisicao, resposta, depois)=>{
  const erro = new Error('Não encontramos nehuma rota para esse endereço');
  erro.status = 404;
  depois(erro);
});

app.use((error,requisicao,resposta,depois)=>{
  resposta.status(error.status || 500);
  return resposta.send({
    erro:{
      mensagem: error.message
    }
  })
})

module.exports = app;