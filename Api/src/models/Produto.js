import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema(

    {
        id: {type: String },
        nome: {type: String, required: true},
        descricao: {type: String},
        preco: {type: String, required: true}
    }
);

const produtos = mongoose.model('produtos', produtoSchema);

export default produtos;