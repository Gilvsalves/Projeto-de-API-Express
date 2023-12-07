//import do modelo de estoque criado na camada models
import local from "../models/local.js";

//Criar nossa classe sem passar parametros sem retorno

class LocalController{
    /* OBS! FUNÇÃO ASSINCRONA
        Funções assincronas são aquelas que acessam ou buscam algum tipo de recurso em um dispositivo externo,
        como por exemplo, um banco de dados. Nesse tipo de função precisamos que nosso código espere a resposta
        para executar a ação seguinte.

        OBS! FUNÇÃO STATIC

        Quando queremos utilizar o metodo de uma função sem precisar criar uma instância da classe, chamar eles de forma estática.

        Criar um método de listarItem que recebe dois parametros, o primeiro é o controlador que vai manejar as requisições
        e o segundo as respostas.
    */
    static async listarLocais(req, res) {

        try{
            const listaLocais = await local.find({})
            res.status(200).json(listaLocais)
        }
        catch(erro){
            res.status(500).json({message:`Erro ao listar - ${erro.message}`})
        }
        

        /*const listaEstoque = await estoq.find({});
        res.status(200).json(listaEstoque);*/
    }

    //Listar itens por ID

    static async listaLocalID(req,res){
        try{
            //id vai guardar a id passada na requisição
            const id= req.params.id;
            //findById método mogoose para buscar por id
            const localEncontrado = await local.findById({id});
            res.status(200).json(localEncontrado);
        }
        catch(erro){
            res.status(500).json({message:`Erro ao listar item - ${erro.message}`})
        }
    }
    //Atualizar por id

    static async atualizarLocal(req, res){
        try{
            /* */
            const id = req.params.id;
            await local.findByIdAndUpdate(id, req.body);
            res.status(200).json({message:`Item atualizado com sucesso"`})
        }
        catch(erro){
            res.status(500).json({message:`Erro ao atualizar item ${erro.message}`})
        }
    }

    static async deletarLocal(req, res){
        try{
            /* */
            const id = req.params.id;
            await local.findByIdAndDelete(id, req.body);
            res.status(200).json({message:`Item deletado com sucesso`})
        }
        catch(erro){
            res.status(500).json({message:`Erro ao deletar item ${erro.message}`})
        }
    }

    //Criar controller para cadastro de estoque, utilizando bloco try e catch
    static async cadastrarLocal(req, res){
    
    //Manejo de erro | Sucesso

    try{
        /* Vaga é o modelo criado na camada models no mogoose e create é um 
        método do mongoose para criar uma vaga no banco, e objeto de vaga é passado no req.body
        */

        const novoLocal = await local.create(req.body);
        //novoItem é retorno do método create.
        res.status(201).send({message:'Coisa cadastrada com sucesso!', item:novoLocal});

    }catch(erro){
        //500 erro interno do servidor
        //erro.message é a mensagem de erro que o mongoose retorna.
        res.status(500).json({error:`${erro.message} - falha ao cadastrar vaga`});
    }
  }
}
export default LocalController;
