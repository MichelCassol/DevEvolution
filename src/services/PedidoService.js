const modelPedido = require('../models/modelPedido');
const contador = require('../models/modelContador');

module.exports = class PedidoService {

	async counter(nome) {
		const primeiroPed = await contador.findOne({name: nome});

		if (!primeiroPed) {
			await contador.create({name: nome, seq: 0});
		}

		const id = await contador.findOneAndUpdate({name: nome},{$inc: {seq: 1}},{new: true});
		return id.seq;
	}

	async create(body) {

	}

	async deleteOne(numPed) {

	}

	async insertProductPed(numPed, _idProduto) {
	
	}

	async removeProductPed(numPed, _idProduto) {

	}

	async find(body) {

	}

	async findOne(numPed) {

	}

	async closePed(numPedido) {

	}
}
