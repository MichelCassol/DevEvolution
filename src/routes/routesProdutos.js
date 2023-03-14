const express = require('express');

const ProdutoController = new (require('../controlles/ProdutoController'));

const routes = express.Router();

routes.get('/cadastro', (req,res) => ProdutoController.createAllProducts(req, res));
routes.get('/',(req,res) => ProdutoController.find(req, res));
routes.post('/', (req,res) => ProdutoController.create(req, res));
routes.get('/:id', (req,res) => ProdutoController.findOne(req, res));
routes.put('/:id',(req,res) => ProdutoController.updateOne(req, res));
routes.delete('/:id', (req, res) => ProdutoController.deleteOne(req, res));

module.exports = routes;
