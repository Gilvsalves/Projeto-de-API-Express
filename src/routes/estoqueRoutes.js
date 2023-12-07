//Arquivo de rotas da aplicação
import express from "express";
import ItemController from "../controllers/itemControllers.js";

//Método especifico para gestão de rotas

const routes = express.Router();

//Passar a rota e controller como parametro

routes.get("/estoque", ItemController.listarItens);

routes.get("/estoque/:id",ItemController.listaItemID);

routes.post("/estoque",ItemController.cadastrarItem );

routes.put("/vagas/:id",ItemController.atualizarItem);

routes.delete("/estoque/:id",ItemController.deletarItem);

export default routes;