const modelPedido = require('../models/modelPedido');
const modelProdutos= require('../models/modelProduto');
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

	async insertProductPed(body) {
		const { numeroPedido, idProduto, quantidade } = body;
		const produto = await modelProdutos.findById(idProduto);
		const newProduct = await modelPedido.findOneAndUpdate(
			{ numeroPedido: numeroPedido },
			{ $push: { produtos: { nome: produto.descricao, produto: idProduto } } },
			{ new: true }
		)
		return newProduct;
	}

	async removeProductPed(body) {
		const { numeroPedido, idProduto, quantidade } = body;
		const newProduct = await modelPedido.findOneAndUpdate(
			{ numeroPedido: numeroPedido },
			{ $pull: { produtos: { produto: idProduto } } },
			{ new: true }
		)
		return newProduct;
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
