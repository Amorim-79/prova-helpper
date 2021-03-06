const { Router } = require('express')

const ClientController = require('./controllers/ClientController')

const routes = Router()

/* RESPECTIVAMENTE AS ROTAS PARA 
CRIAÇÃO, LISTAGEM, ATUALIZAÇÃO E EXCLUSÃO DE CLIENTES */
routes.post('/clients', ClientController.create)
routes.get('/clients', ClientController.index)
routes.put('/clients/:id', ClientController.update)
routes.delete('/clients/:id', ClientController.delete)

module.exports = routes