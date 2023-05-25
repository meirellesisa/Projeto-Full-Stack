import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from "cors";
import routes from './routes/index.js';
import path from "path"

//conectando com o banco----------
import db from './config/dbConnect.js';

db.on("error", console.log.bind(console, "Erro de conexão com o banco "))

db.once("open", ()=>{
  console.log("Conexão com o banco feita com sucesso")
})

//--------------------------------
const app = express();

//Deixa tudo da pasta "view" estático para o navegador. ( Normalmente utilizado para o front ).
app.use('/', express.static(path.resolve('./src/view')));
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.json());

routes(app);

//quando não encotar rota

export default app