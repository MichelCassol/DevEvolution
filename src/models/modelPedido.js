const mongoose = require('mongoose');
// const itensPedidos = require('./modelItensPedido');

const pedidoSchema = new mongoose.Schema({
	numeroPedido: {type: Number, unique: true},
	valorTotal: Number,
	data: Date,
	status: Boolean,
	usuario: {type: mongoose.Schema.Types.ObjectId, ref:'usuario'},
});

// pedidoSchema.pre('deleteOne', async () => {
	// const itens = await mongoose.model(itensPedidos).countDocuments({ _idPedido: this._id });
	// if (itens > 0) {
		// const erro = new Error('o pedido nao pode ser deletado pois ha produtos associados a ele');
		// erro.statusCode = 400;
		// console.log(erro);
		// return erro;
	// }
// });
// pedidoSchema.pre('deleteOne', function(next) {
	// mongoose.model('itensPedidos').count({ _idPedido: this._id }, function(erro, count) {
		// if (count > 0) {
			// return next(new Error('erro ao deletar pedido'));
		// }
		// next();
	// })	
// });

module.exports = mongoose.model('pedido',pedidoSchema);
