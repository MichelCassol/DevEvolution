const PedidoService = new (require('../services/PedidoService'));

module.exports = class PedidoController {
	async create(req,res) {
		const numPed = await PedidoService.counter('pedidos');
		res.json(numPed);
	}

	async deleteOne(req, res) {

	}

	async insertProductPed(req, res) {
	
	}

	async removeProductPed(req, res) {

	}

	async find(req, res) {

	}

	async findOne(req, res) {

	}

	async closePed(req, res) {

	}
}
