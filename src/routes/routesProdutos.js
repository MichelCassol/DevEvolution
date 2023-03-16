const express = require('express');

const ProdutoController = new (require('../controlles/ProdutoController'));

const validate = require('./auth/validate')

const routes = express.Router();

routes.get('/cadastro',validate(),(req,res) => ProdutoController.createAllProducts(req, res));
routes.get('/',validate(),(req,res) => ProdutoController.find(req, res));
routes.post('/',validate(),(req,res) => ProdutoController.create(req, res));
routes.get('/:id',validate(),(req,res) => ProdutoController.findOne(req, res));
routes.put('/:id',validate(),(req,res) => ProdutoController.updateOne(req, res));
routes.delete('/:id',validate(),(req, res) => ProdutoController.deleteOne(req, res));

module.exports = routes;
