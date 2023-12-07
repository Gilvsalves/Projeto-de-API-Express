import mongoose from "mongoose";

const localSchema = new mongoose.Schema({
    id:{type: mongoose.Schema.Types.ObjectId},
    titulo:{type: String, require: true}, //título do local
    armario:{type: String},
    estante:{type: String},
    posicao: {type:Number}, //Separar esquerda, direita e centro como "A", "B", "C".
    
    id_item: {type:Number}
},{versionKey: false}
);

const local = mongoose.model("Local", localSchema);

export default local;

//api express com mongo db