import { error } from "console";
import produtos from "../models/Produto.js";

class ProdutoController{

    static listarProdutos = (req,res)=>{
        produtos.find((error, produtos)=>{
            res.status(200).json(produtos)
        })
    }

    static buscarProduto = (req,res)=>{
        
        const id = req.params.id;

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
            }else{
                res.status(500)
                .send({message: `${error.message} - falha ao cadastrar produto`})
            }
        })
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
    }
}

export default ProdutoController