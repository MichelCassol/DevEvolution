const mongoose = require('mongoose');

const produtoSchema = mongoose.Schema({
	descricao: String,
	valor: Number,
	quantidade: Number
});

module.exports = mongoose.model('produto', produtoSchema, 'produtos');
