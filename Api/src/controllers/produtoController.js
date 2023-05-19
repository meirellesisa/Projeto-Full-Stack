import { error } from "console";
import produtos from "../models/Produto.js";

class ProdutoController{

    static listarProdutos = (req,res)=>{
        produtos.find((error, produtos)=>{
            res.status(200).json(produtos)
        })

        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept");
      
    }

    static buscarProduto = (req,res)=>{
        
        const id = req.params.id;
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept");

        produtos.findById(id, (error,produtos)=>{

            if(!error){
                res.status(200).send(produtos)
            }else{
                res.status(400).send("Id não foi encontrado")
            }
        })

    }

    static cadastrarProduto = (req,res)=>{

        let produto = new produtos(req.body)

        produto.save((error)=>{
            if(!error){
                res.status(201).send(produto.toJSON())
                console.log(produto)
            }else{
                res.status(500)
                .send({message: `${error.message} - falha ao cadastrar produto`})
            }
            
        })
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept");
    }

    static atualizarProduto = (req,res)=>{

        const id = req.params.id;

        produtos.findByIdAndUpdate(id, {$set: req.body} ,(error)=>{

            if(!error){
                res.status(200).send({message: "Produto Atualizado com sucesso"})
            }else{
                res.status(500).send({message: error.message})
            }
        })

    }

    static deletarProduto = (req,res)=>{



        const id = req.params.id;

        produtos.findByIdAndDelete(id, (error)=>{

            if(!error){
                res.status(404).send()
            }else{
                res.status(500).send({message: error.message})
            }
        })

        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept");
    }
}

export default ProdutoController