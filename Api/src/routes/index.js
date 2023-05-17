import express from "express";
import produtos from "./produtosRoutes.js";
import { error } from "console";

const routes = (app)=>{

  app.route('/').get((req,res)=>{
    res.status(200).send({titulo: "Curso de Node"})
  })

  app.use(
    express.json(),
    produtos
  )
    
    

}

export default routes