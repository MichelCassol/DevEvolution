const mongoose = require('mongoose');

const usarioSchema = mongoose.Schema({
	nome: String,
	email: String,
	senha: String
});

module.exports = mongoose.model('usuario',usarioSchema,'usuarios');
