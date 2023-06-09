const modelItensPedido = require('../models/modelItensPedido');

module.exports = class ItensPedidoService {

	async create(_idPed, numPedido, body) {
		const { produtos } = body;
		const newProducts = [];
		for (let i = 0; i < produtos.length; i++) {
			newProducts[i] = await modelItensPedido.create({ _idPedido: _idPed, _idProduto: produtos[i], numeroPedido: numPedido })
		}
		return newProducts;
	}

	async deleteOne(numPedido, idProduto) {
		const produto = await modelItensPedido.deleteOne({numeroPedido: numPedido, _idProduto: idProduto})
			.then((sucess) => {
				const { deletedCount } = sucess;
				if (deletedCount === 0) {
					return { erro: 'produto ou pedido nao encontrado' };
				}
				return { sucess: 'produto removido' };
			})
			.catch((erro) => {
				return { erro: 'erro ao deletar o produto' };
			});
		return produto;
	}

	async findOne(numPed) {
		const pedido = await modelItensPedido.findOne({ numeroPedido: numPed });
		return pedido;
	}
}
