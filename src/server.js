const express = require("express")
const server = express()
const routes = require("./routes")
const path = require("path")
var porta = process.env.PORT || 8080

//EJS é uma egine que roda html
//server.set -> setar configuração
server.set('view engine', 'ejs')

//Mudar a localização da pasta views
server.set('views', path.join(__dirname, 'views'))

//Fica no meio da chamada e a resposta
//O use serve para você adicionar configurações ao seu servidor
//Habilitar arquivos static
server.use(express.static("public"))

// usar o req.body
server.use(express.urlencoded({extended: true}))

//Routes
server.use(routes)

server.listen(porta, () => console.log('rodando'))