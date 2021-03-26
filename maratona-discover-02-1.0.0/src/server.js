const express = require("express")
const server = express()
const routes = require("./routes")

//EJS é uma egine que roda html
//server.set -> setar configuração
server.set('view engine', 'ejs')

//Fica no meio da chamada e a resposta
//O use serve para você adicionar configurações ao seu servidor
//Habilitar arquivos static
server.use(express.static("public"))

//Routes
server.use(routes)

server.listen(3000, () => console.log('rodando'))