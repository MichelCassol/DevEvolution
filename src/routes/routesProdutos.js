const express = require('express');
const { body, param } = require('express-validator');

const ProdutoController = new (require('../controlles/ProdutoController'));

const validate = require('./auth/validate')

const routes = express.Router();

routes.get('/cadastro',validate(),(req,res) => ProdutoController.createAllProducts(req, res));
routes.get('/',validate(),(req,res) => ProdutoController.find(req, res));

routes.post('/',
	validate(),
	[ body('descricao').exists(), body('valor').isDecimal(), body('quantidade').isNumeric() ],
	(req,res) => ProdutoController.create(req, res)
);

routes.get('/:id',
	validate(),
	[ param('id').exists() ],
	(req,res) => ProdutoController.findOne(req, res)
);

routes.put('/:id',
	validate(),
	[ param('id').exists(), body('quantidade').exists() ],
	(req,res) => ProdutoController.updateOne(req, res)
);

routes.delete('/:id',
	validate(),
	[ param('id').exists() ],
	(req, res) => ProdutoController.deleteOne(req, res)
);

module.exports = routes;
