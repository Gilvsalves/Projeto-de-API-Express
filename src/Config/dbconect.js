import mongoose from "mongoose";
//mongodb+srv://gilvsalves:Gilvs21@cluster0.sibzg3e.mongodb.net/EmpregaEu?retryWrites=true&w=majority
async function connectDataBase(){
    mongoose.connect("mongodb+srv://alvesgilvan9:Gilvsalves@estocagem.lr1nobr.mongodb.net/Estoque?retryWrites=true&w=majority")
    return mongoose.connection;

}
export default connectDataBase;