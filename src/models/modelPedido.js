const mongoose = require('mongoose');

const produto = new mongoose.Schema({
	nome: String,
	produto: {type: mongoose.Schema.Types.ObjectId, ref: 'produto'}
});

const pedidoSchema = new mongoose.Schema({
	numeroPedido: Number,
	valorTotal: Number,
	status: Boolean,
	usuario: {type: mongoose.Schema.Types.ObjectId, ref:'usuario'},
	produtos: produto
});

module.exports = mongoose.model('pedido',pedidoSchema);
