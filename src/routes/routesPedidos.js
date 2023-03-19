const express = require('express');

const PedidoController = new (require('../controlles/PedidoController'));

const routes = express.Router();

routes.post('/', (req, res) => PedidoController.create(req, res));
routes.get('/', (req, res) => PedidoController.find(req, res));
routes.get('/finalizar/:numPed', (req, res) => PedidoController.closePed(req, res));
routes.get('/:numPed', (req, res) => PedidoController.findOne(req, res));
routes.delete('/:numPed', (req, res) => PedidoController.deleteOne(req, res));

module.exports = routes;
