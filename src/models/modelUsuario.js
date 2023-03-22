const mongoose = require('mongoose');

const usarioSchema = mongoose.Schema({
	nome: String,
	email: { type: String, unique: true },
	senha: String
});

module.exports = mongoose.model('usuario',usarioSchema,'usuarios');
