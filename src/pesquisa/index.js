import {useState} from "react"
function Pesquisa(){

    //nome do atributo aque resgatar seguindo do nome do atributo que vai resgatar
    //o useState passa o valor inicial do estado.

    const [itensPesquisadas, setItensPesquisados]= useState([])
    console.log()
    return(
        <section>
            <h1>Encontre seu item</h1>
            <input placeholder="Digite o tipo de item" 
            //Evento Onblur muda a cor do input além de fazer a captura do conteúdo pelo parametro do evento.
            onblur={(evento=>{
                const textoDigitado = evento.target.value;

                const resultadoPesquisa = vagas.filter(vaga=> vaga.titulo.includes(textoDigitado))
                setItensPesquisados(textoDigitado)
            })}></input>
            
        </section>
    )
}

export default Pesquisa;