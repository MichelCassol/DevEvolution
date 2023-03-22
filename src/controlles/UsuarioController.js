const UsuarioService = require('../services/UsuarioService');
const { validationResult } = require('express-validator');

module.exports = new class UsuarioController {

	async create (req,res) {
		
		const error = validationResult(req);
		if (!error.isEmpty()) {
			res.status(400).json({ error: 'campos faltantes na requisicao' });
		}
		
		const retorno = await UsuarioService.create(req.body);
		if(retorno){
			res.status(201).json(retorno);
		} else {
			res.status(400).json({erro: 'usuario ja cadastrado'});
		}
	}

	async updatePassword(req,res) {

		const error = validationResult(req);
		if (!error.isEmpty()) {
			res.status(400).json({ error: 'campos faltantes na requisicao' });
		}

		const retorno = await UsuarioService.updatePassword(req.body);
		if (retorno) {
			res.status(202).json(retorno);
		} else {
			res.status(400).json({erro: 'senha nao atualizada'});
		}
	}

	async find(req,res) {
		const retorno = await UsuarioService.find(req.body);
		res.status(201).json(retorno);
	}

	async token(req, res) {

		const error = validationResult(req);
		if (!error.isEmpty()) {
			res.status(400).json({ error: 'campos faltantes na requisicao' });
		}

		let token = await UsuarioService.token(req.body);
		if (token) {
			token = `Bearer ${token}`;
			res.status(200).json({token});
		} else {
			res.status(401).json('dados de acesso incorretos')
		}
	}
}
