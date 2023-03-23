const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
	numeroPedido: {type: Number, unique: true},
	valorTotal: Number,
	data: Date,
	status: Boolean,
	usuario: {type: mongoose.Schema.Types.ObjectId, ref:'usuario'},
});

module.exports = mongoose.model('pedido',pedidoSchema);
