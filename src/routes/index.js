//Ponto de entrada das rotas da aplicação, toda aplicação acessa as rotas por aqui
import express from "express";
import coisasRoutes from "./estoqueRoutes.js";

//Agrupar todas as rotas que vamos receber

const routes=(app)=>{
    app.route("/").get((req, res) => status(200).send("Inicio Estoque"));
    //"use" é um método utilizado para incluir um middleware na instancia do express
    //o "use" recebe 2 parametros, o middleware e as rotas que estão em coisasRoutes.js
    app.use(express.json(), coisasRoutes);
}

export default routes;