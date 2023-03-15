const express = require('express');

const routesProdutos = require('./routes/routesProdutos');
const routesUsuarios = require('./routes/routesUsuarios');

const routes = express.Router();

routes.use('/produtos', routesProdutos);
routes.use('/usuarios', routesUsuarios);

module.exports = routes;
