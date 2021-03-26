const express = require("express")
const server = express()

//Fica no meio da chamada e a resposta
//O use serve para você adicionar configurações ao seu servidor
//Habilitar arquivos static
server.use(express.static("public"))

//Resquest, response
server.get('/', (request, response) => {
   return response.sendFile(__dirname + "/views/index.html")
})


server.listen(3000, () => console.log('rodando'))