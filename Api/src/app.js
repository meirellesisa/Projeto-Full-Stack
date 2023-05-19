import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from "cors";
import routes from './routes/index.js';

//conectando com o banco----------
import db from './config/dbConnect.js';

db.on("error", console.log.bind(console, "Erro de conexão com o banco "))

db.once("open", ()=>{
  console.log("Conexão com o banco feita com sucesso")
})

//--------------------------------
const app = express();
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.json());

routes(app);

  
  


//quando não encotar rota



export default app