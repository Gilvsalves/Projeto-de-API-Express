import mongoose from "mongoose";

const funcionarioSchema = new mongoose.Schema({
    id:{type: mongoose.Schema.Types.ObjectId},
    nome:{type: String, require: true},
    cargo:{type: String},
    setor:{type: String},

    id_local:{type: Number}
},{versionKey: false}
);

const funcionario = mongoose.model("Funcionario", funcionarioSchema);

export default funcionario;

//api express com mongo db