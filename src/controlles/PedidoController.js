const PedidoService = new (require('../services/PedidoService'));

module.exports = class PedidoController {
	async create(req,res) {
		const pedido = await PedidoService.create(req.body);
		res.json(pedido);
	}

	async deleteOne(req, res) {
		const pedido = await PedidoService.deleteOne(req.params.numPed);
		res.json(pedido);
	}

	async insertProductPed(req, res) {
	
	}

	async removeProductPed(req, res) {

	}

	async find(req, res) {
		const pedidos = await PedidoService.find(req.body);
		res.json(pedidos);
	}

	async findOne(req, res) {
		const pedido = await PedidoService.findOne(req.params.numPed);
		res.json(pedido);
	}

	async closePed(req, res) {
		const pedido = await PedidoService.closePed(req.params.numPed);
		res.json(pedido);
	}
}
