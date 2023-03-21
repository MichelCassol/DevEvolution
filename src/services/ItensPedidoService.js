const modelItensPedido = require('../models/modelItensPedido');

module.exports = class ItensPedidoService {

	async create(_idPed, numPedido, body) {
		Object.values(body).forEach(async value => {
			await modelItensPedido.create({ _idPedido: _idPed, _idProduto: value.produto, numeroPedido: numPedido });
		});
		return 1;
	}

	async deleteOne(_idItem) {
		const item = await modelItensPedido.deleteOne({_id: _idItem});
		return item;
	}

	async find() {

	}

	async findOne(numPedido) {

	}
}
