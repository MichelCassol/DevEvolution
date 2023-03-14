const mongoose = require('mongoose');

const pedidoSchema = mongoose.model({
	valorTotal: Number,
	status: Boolean,
	usuario: {type: mongoose.Schema.Types.ObjectId, ref:'usuario'},
	produto: [{_id:{type: mongoose.Schema.Types.ObjectId, ref:'produto'},nome: String}]
});

module.exports = mongoose.model('pedido',pedidoSchema,'pedidos');

