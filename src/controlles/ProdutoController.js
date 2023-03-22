const ProdutoService = new (require('../services/ProdutoService'));
const { validationResult } = require('express-validator');

module.exports = class ProdutoController {

	async createAllProducts(req,res) {
		const allProducts = [
			{descricao: 'Cabo USB-C', valor: 50.00, quantidade: 3},
			{descricao: 'Cabo HDMI', valor: 30.00, quantidade: 4},
			{descricao: 'Monitor 24', valor: 1050.00, quantidade: 2},
			{descricao: 'Suporte para notebook', valor: 40.00, quantidade: 1}
		];

		const retorno = await ProdutoService.createAllProducts(allProducts);
		res.json(retorno);
	}

	async create(req, res) {

		const error = validationResult(req);
		if (!error.isEmpty()) {
			res.status(400).json({ error: 'campos faltantes na requisicao' });
			return ;
		}

		const retorno = await ProdutoService.create(req.body);
		res.json(retorno);
	}

	async deleteOne(req,res) {

		const error = validationResult(req);
		if (!error.isEmpty()) {
			res.status(400).json({ error: 'informe o id do produto' });
			return ;
		}

		const retorno = await ProdutoService.deleteOne(req.params.id);
		res.json(retorno);
	}

	async updateOne(req,res) {

		const error = validationResult(req);
		if (!error.isEmpty()) {
			res.status(400).json({ error: 'campos faltantes na requisicao' });
			return ;
		}
		
		const retorno = await ProdutoService.updateOne(req.params.id, req.body);
		res.json(retorno);
	}

	async find(req, res) {
		const retorno = await ProdutoService.find(req.body);
		res.json(retorno);
	}

	async findOne(req, res) {

		const error = validationResult(req);
		if (!error.isEmpty()) {
			res.status(400).json({ error: 'informe o id do produto' });
			return ;
		}

		const retorno = await ProdutoService.findOne(req.params.id);
		res.json(retorno);
	}

}
