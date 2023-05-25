import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema(

    {
        id: {type: String },
        nome: {type: String},
        descricao: {type: String},
        preco: {type: String}
    }
);

const produtos = mongoose.model('produtos', produtoSchema);

export default produtos;