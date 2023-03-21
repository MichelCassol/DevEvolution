const PedidoService = new (require('../services/PedidoService'));
const ItensPedidoService = new (require('../services/ItensPedidoService'));

module.exports = class PedidoController {
	async create(req,res) {
		const pedido = await PedidoService.create();
		const itensPedido = await ItensPedidoService.create(pedido._id, pedido.numeroPedido, req.body)
			.then(async () => {
				const pedidoFinal = await PedidoService.findPedidoProduto(pedido.numeroPedido);
				res.json(pedidoFinal);
			});
	}

	async deleteOne(req, res) {
		const pedido = await PedidoService.deleteOne(req.params.numPed);
		res.json(pedido);
	}

	async insertProductPed(req, res) {
		const pedido = await PedidoService.findOne(req.body.numeroPedido);
		if (pedido) {
			const produto = await ItensPedidoService.create(pedido._id, pedido.numeroPedido, req.body);
			res.json(produto);
		}
		res.json('pedido nao encontrado');
	}

	async removeProductPed(req, res) {
		const produto = await ItensPedidoService.deleteOne(req.params.numPed, req.params._idProduto);
		res.json(produto);
	}

	async find(req, res) {
		const pedidos = await PedidoService.find(req.body);
		res.json(pedidos);
	}

	async findOne(req, res) {
		const pedido = await PedidoService.findPedidoProduto(req.params.numPed);
		res.json(pedido);
	}

	async closePed(req, res) {
		const pedido = await PedidoService.closePed(req.params.numPed);
		res.json(pedido);
	}
}
