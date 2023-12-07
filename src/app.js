import express from "express";
import connectDataBase from "./Config/dbconect.js";
//import estoq from "./models/estoque.js"; Não precisa mais importar modelo de estoque
import routes from "./routes/index.js"

const conexao = await connectDataBase();

conexao.on("error", (erro)=>{
    console.error("Erro de conexão!",erro)
})

conexao.once("open",()=>{
    console.log("Conexão com banco de dados ok!")
})

const app = express();

routes(app);

//app.use(express.json())

//   const estoque = [
//     {id: 1, "titulo": "Câmera"},
//     {id: 2, "titulo": "Ballun"},
//     {id: 3, "titulo": "Conector P4"},
//     {id: 4, "titulo": "Conector BNC"}
//     ]
    

    // app.get('/', (req, res) => {
    //     res.status(200).send('Inicio Estoque');
    // })
    // // app.get('/estoque', async(req, res) => {
    // //     const listaEstoque = await estoq.find({});
    // //     res.status(200).json(listaEstoque);
    // // })
    // app.post('/estoque', (req, res) => {
    //     estoq.push(req.body);
    //     res.status(201).send('Produto cadastrado com Sucesso!')
    // })

    // app.get('/estoque/:id', (req, res)=>{
    //     const index = buscaEstoq(req.params.id);
    //     res.status(201).json(estoq[index]);
    // })

    // app.delete('/estoque/:id',(req, res)=>{
    //     const index = buscaEstoq(req.params.id);
    //     estoq.lastIndexOf(index,1)
    //     res.status(201).json(estoq)
    // })

    // function buscaEstoq(id) {
    //     return estoq.findIndex(estoq => estoq.id == id)
    // }
    // app.put('/estoque/:id', (req, res) => {
    //     let index = buscaEstoq(req.params.id);
    //     vaga[index].titulo = req.body.titulo;
    //     res.json(vaga); //Devolver o array para visuliazar a alteração.
    //     })

    
    /*    
    function deletaVaga(id) {
        return vagas.findIndex(vagas => vagas.id == id)
    }
    app.delete('/vagas/:id', (req, res) => {
        let index = deletaVaga(req.params.id);
        vagas[index].titulo = req.body.titulo;
        res.json(vagas); //Devolver o array para visuliazar a alteração.
        })
           */     
    export default app // Preciso exportar para outro arquivo fazer uso.
    