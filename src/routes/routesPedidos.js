const express = require('express');

const PedidoController = new (require('../controlles/PedidoController'));

const validate = require('./auth/validate');

const routes = express.Router();

routes.post('/', validate(), (req, res) => PedidoController.create(req, res));
routes.get('/', validate(), (req, res) => PedidoController.find(req, res));
routes.get('/finalizar/:numPed', validate(), (req, res) => PedidoController.closePed(req, res));
routes.get('/:numPed', validate(), (req, res) => PedidoController.findOne(req, res));
routes.post('/produtos', validate(), (req, res) => PedidoController.insertProductPed(req, res));
routes.delete('/produtos/:numPed/:_idProduto', validate(), (req, res) => PedidoController.removeProductPed(req, res));
routes.delete('/:numPed', validate(), (req, res) => PedidoController.deleteOne(req, res));

module.exports = routes;
