const mongoose = require('mongoose');

const produto = new mongoose.Schema({
	_id: false,
	nome: String,
	produto: {type: mongoose.Schema.Types.ObjectId, ref: 'produto'},
	quantidade: Number
});

const pedidoSchema = new mongoose.Schema({
	numeroPedido: {type: Number, unique: true},
	valorTotal: Number,
	data: Date,
	status: Boolean,
	usuario: {type: mongoose.Schema.Types.ObjectId, ref:'usuario'},
	produtos: {type: [produto], default: []}
});

module.exports = mongoose.model('pedido',pedidoSchema);
