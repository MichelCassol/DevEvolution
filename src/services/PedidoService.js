const modelPedido = require('../models/modelPedido');
const contador = require('../models/modelContador');

module.exports = class PedidoService {

	async create() {
		const pedido = await modelPedido.create({
			numeroPedido: await contador.getCounter('pedidos'),
			data: Date.now(),
			valorTotal: 0,
			status: true,
		});
		return pedido;
	}

	async deleteOne(numPed) {
		const pedido = await modelPedido.deleteOne({numeroPedido: numPed})
			.then((ped) => {
				if(ped.deletedCount === 1) {
					return { sucess: 'pedido deletado' };
				} else {
					return { sucess: 'pedido nao encontrado' };
				}
			})
			.catch(() => {
				return { erro: 'erro ao deletar o pedido, tente novamente' };
			});
		return pedido;
	}

	async findPedidoProduto(numPedido) {
		const pedidoProdutos = await modelPedido.aggregate([
			{ $match: { numeroPedido: Number(numPedido) } },
			{ $lookup: { 
				from: 'itenspedidos',
				localField: '_id',
				foreignField: '_idPedido',
				as: 'produtos'
			} }
		]);
		return pedidoProdutos;
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
		const pedido = await modelPedido.updateOne({numeroPedido: numPedido},{$set: {status: false}})
			.then((ped) => {
				if(ped.matchedCount === 1) {
					return { sucess: 'pedido finalizado' };
				} else {
					return { sucess: 'pedido nao encontrado' };
				}
			})
			.catch(() => {
				return { erro: 'erro ao finalizar o pedido, tente novamente' };
			});
		return pedido;
	}
}
