const express = require('express');
const { body } = require('express-validator');

const UsuarioController = require('../controlles/UsuarioController');
const validate = require('./auth/validate');

const routes = express.Router();

routes.get('/', validate(), (req,res) => UsuarioController.find(req, res));

routes.post('/',
	[ body('nome').exists(), body('email').isEmail(), body('senha').exists() ],
	(req, res) => UsuarioController.create(req, res)
);

routes.put('/',
	validate(), 
	[ body('email').exists(), body('senha').exists(), body('senhaAntiga').exists() ],
	(req, res) => UsuarioController.updatePassword(req, res)
);

routes.post('/login',
	[ body('email').isEmail(), body('senha').exists() ],
	(req, res) => UsuarioController.token(req, res)
);

module.exports = routes;
