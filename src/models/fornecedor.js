import mongoose from "mongoose";

const fornecedorSchema = new mongoose.Schema({
    id:{type: mongoose.Schema.Types.ObjectId},
    titulo:{type: String, require: true},
    oqFornece:{type: String},
    qtGanhou: {type:Number}
},{versionKey: false}
);

const fornecedor = mongoose.model("Fornecedor", fornecedorSchema);

export default fornecedor;

//api express com mongo db