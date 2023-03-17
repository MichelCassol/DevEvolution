const express = require('express');

const PedidoController = new (require('../controlles/PedidoController'));

const routes = express.Router();

routes.post('/', (req, res) => PedidoController.create(req, res));
routes.get('/', (req, res) => PedidoController.find(req, res));

module.exports = routes;
