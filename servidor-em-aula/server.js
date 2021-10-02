const  filmesJson= require("./data/ghibli.json")
const express = require("express")

const cors = require("cors")

const app = express() //execuutando o express



app.use(cors())
app.use(express.json()) //esta fazendo o body parse

app.get("/oi", (request, response)=>{
    response.status(200).json([
        {
            "mesagem":"API de filmes Ghibli da turma on 14"
        }
    ]) 
})


app.get("/filmes", (request, response)=>{
    
    response.status(200).send(filmesJson)
})


app.get("/filmes/:id", (request, response)=>{//requisição por ID
   

    const idRequisitado = request.params.id

    let filmeEncontrado = filmesJson.find(filme => filme.id == idRequisitado) 

    response.status(200).send(filmeEncontrado)

})

app.post("/filmes/criar", (request, response)=>{//enviando por 

    let tituloRequest = request.body.title
    let descricaoRequest = request.body.description

    let novoFilme = {
        id: (filmesJson.length) + 1,
        title: tituloRequest,
        description: descricaoRequest //não esquecer do espaço depois dos pontos
    }

    filmesJson.push(novoFilme)

    response.status(201).json(
        
        [{
            "mensagem": "Filme cadastrado com sucesso",
            novoFilme

        }])

})








app.listen(3030, () => {

    console.log("Alo pepe moreno? To ligando da porta 3030")

})