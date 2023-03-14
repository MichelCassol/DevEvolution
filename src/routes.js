const express = require('express');

const routesProdutos = require('./routes/routesProdutos');

const routes = express.Router()

routes.use('/produtos', routesProdutos)

module.exports = routes;
