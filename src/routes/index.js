import express from "express";
import produtos from "./produtosRoutes.js";
import { error } from "console";

const routes = (app)=>{


  app.use(
    express.json(),
    produtos
  )
    
    

}

export default routes