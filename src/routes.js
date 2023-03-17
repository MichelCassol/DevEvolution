const express = require('express');

const routesProdutos = require('./routes/routesProdutos');
const routesUsuarios = require('./routes/routesUsuarios');
const routesPedidos = require('./routes/routesPedidos');

const routes = express.Router();

routes.use('/produtos', routesProdutos);
routes.use('/usuarios', routesUsuarios);
routes.use('/pedidos', routesPedidos);

module.exports = routes;
