const { validationResult } = require('express-validator');
const PedidoService = new (require('../services/PedidoService'));
const ItensPedidoService = new (require('../services/ItensPedidoService'));

module.exports = class PedidoController {
	async create(req,res) {

		const error = validationResult(req);
		if (!error.isEmpty()) {
			res.status(400).json({ error: 'campo produtos nao informado' });
			return ;
		}

		const pedido = await PedidoService.create(req.user._id);
		await ItensPedidoService.create(pedido._id, pedido.numeroPedido, req.body)
		const pedidoFinal = await PedidoService.findPedidoProduto(pedido.numeroPedido);

		res.json(pedidoFinal);
	}

	async deleteOne(req, res) {

		const error = validationResult(req);
		if (!error.isEmpty()) {
			res.status(400).json({ error: 'numero do pedido invalido' });
			return ;
		}

		const exists = await ItensPedidoService.findOne(req.params.numPed);
		console.log(exists);
		if (!exists) {
			const pedido = await PedidoService.deleteOne(req.params.numPed);
			res.json(pedido);
			return ;
		}
		res.status(400).json({ erro:'erro ao deletar pedido, ha itens vinculados' })
	}

	async insertProductPed(req, res) {

		const error = validationResult(req);
		if (!error.isEmpty()) {
			res.status(400).json({ error: 'campo faltante na requisicao' });
			return ;
		}

		const status = await PedidoService.itsOpen(req.body.numeroPedido);
		if (!status) {
			res.status(400).json({ erro: 'o pedido ja esta finalizado' });	
			return ;
		}
		
		const pedido = await PedidoService.findOne(req.body.numeroPedido);
		if (pedido) {
			const produto = await ItensPedidoService.create(pedido._id, pedido.numeroPedido, req.body);
			res.json(produto);
			return ;
		}
		res.json('pedido nao encontrado');
	}

	async removeProductPed(req, res) {

		const error = validationResult(req);
		if (!error.isEmpty()) {
			res.status(400).json({ error: 'campo faltante na requisicao' });
			return ;
		}

		const status = await PedidoService.itsOpen(req.params.numPed);
		if (!status) {
			res.status(400).json({ erro: 'o pedido ja esta finalizado' });	
			return ;
		}

		const produto = await ItensPedidoService.deleteOne(req.params.numPed, req.params._idProduto);
		res.json(produto);
	}

	async find(req, res) {
		const pedidos = await PedidoService.find(req.body);
		res.json(pedidos);
	}

	async findOne(req, res) {

		const error = validationResult(req);
		if (!error.isEmpty()) {
			res.status(400).json({ error: 'numero do pedido invalido' });
			return ;
		}

		const pedido = await PedidoService.findPedidoProduto(req.params.numPed);
		res.json(pedido);
	}

	async closePed(req, res) {

		const error = validationResult(req);
		if (!error.isEmpty()) {
			res.status(400).json({ error: 'numero do pedido invalido' });
			return ;
		}

		const pedido = await PedidoService.closePed(req.params.numPed);
		res.json(pedido);
	}
}
