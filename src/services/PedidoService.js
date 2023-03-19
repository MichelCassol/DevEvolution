const modelPedido = require('../models/modelPedido');
const contador = require('../models/modelContador');

module.exports = class PedidoService {

	async create(body) {
		const pedido = await modelPedido.create({
			numeroPedido: await contador.getCounter('pedidos'),
			data: Date.now(),
			valorTotal: 0,
			status: true,
			produtos: body
		});
		return pedido;
	}

	async deleteOne(numPed) {
		const pedido = await modelPedido.deleteOne({numeroPedido: numPed});
		return pedido;
	}

	async insertProductPed(numPed, _idProduto) {
	
	}

	async removeProductPed(numPed, _idProduto) {

	}

	async find(body) {
		const pedidos = await modelPedido.find(body);
		return pedidos;
	}

	async findOne(numPed) {
		const pedido = await modelPedido.findOne({numeroPedido: numPed});
		return pedido;
	}

	async closePed(numPedido) {
		const pedido = await modelPedido.updateOne({numeroPedido: numPedido},{$set: {status: false}});
		return pedido;
	}
}
