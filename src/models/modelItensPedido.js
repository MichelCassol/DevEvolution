const mongoose = require('mongoose');

const itensPedido = new mongoose.Schema({
	_idPedido: { type: mongoose.Schema.Types.ObjectId, ref: 'pedido' },
	_idProduto: { type: mongoose.Schema.Types.ObjectId, ref: 'produtos' },
	numeroPedido: Number
});

module.exports = mongoose.model('itensPedidos', itensPedido);
