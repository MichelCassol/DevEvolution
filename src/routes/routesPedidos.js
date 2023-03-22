const express = require('express');
const { body, param } = require('express-validator');

const PedidoController = new (require('../controlles/PedidoController'));

const validate = require('./auth/validate');

const routes = express.Router();

routes.post('/', 
	validate(), 
	[ body('produtos').exists() ], 
	(req, res) => PedidoController.create(req, res)
);

routes.get('/', validate(), (req, res) => PedidoController.find(req, res));

routes.get('/finalizar/:numPed',
	validate(), 
	[ param('numPed').isDecimal() ], 
	(req, res) => PedidoController.closePed(req, res)
);

routes.get('/:numPed',
	validate(), 
	[ param('numPed').isDecimal() ], 
	(req, res) => PedidoController.findOne(req, res)
);

routes.post('/produtos', 
	validate(), 
	[ body('produtos').exists(), body('numeroPedido').isDecimal() ], 
	(req, res) => PedidoController.insertProductPed(req, res)
);

routes.delete('/produtos/:numPed/:_idProduto', 
	validate(), 
	[ param('numPed').isDecimal(), param('_idProduto').exists() ], 
	(req, res) => PedidoController.removeProductPed(req, res)
);

routes.delete('/:numPed',
	validate(), 
	[ param('numPed').isDecimal() ], 
	(req, res) => PedidoController.deleteOne(req, res)
);

module.exports = routes;
