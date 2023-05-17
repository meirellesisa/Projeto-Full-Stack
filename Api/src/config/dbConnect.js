import mongoose from "mongoose";

mongoose.connect("mongodb+srv://treinamento:1088@cluster0.zawgvf4.mongodb.net/treinando")

let db = mongoose.connection;

export default db;