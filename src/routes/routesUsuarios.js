const express = require('express');

const UsuarioController = require('../controlles/UsuarioController');
const validate = require('./auth/validate');

const routes = express.Router();

routes.get('/', validate(), (req,res) => UsuarioController.find(req, res));
routes.post('/', (req, res) => UsuarioController.create(req, res));
routes.put('/', validate(), (req, res) => UsuarioController.updatePassword(req, res));
routes.post('/login', (req, res) => UsuarioController.token(req, res));

module.exports = routes;