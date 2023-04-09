const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')


// Home routes
route.get('/', homeController.paginaInicial)

//contato 
route.get('/contato', contatoController.contato)



module.exports = route