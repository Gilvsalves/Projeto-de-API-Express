import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    id:{type: mongoose.Schema.Types.ObjectId},
    titulo:{type: String, require: true},
    fabricante:{type: String},
    quantidade: {type: Number},

    id_local:{type: Number},
    id_fornecedor:{type: Number}
},{versionKey: false}
);

const item = mongoose.model("Item", itemSchema);

export default item;

//api express com mongo db