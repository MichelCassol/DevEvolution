const modelUsuario = require('../models/modelUsuario');
const jwt = require('jsonwebtoken');

module.exports = new class UsuarioService {

	async create (body) {
		const { email } = body;

		const user = await modelUsuario.findOne({email: email});

		if (user) {
			return undefined;	
		} else {
			const usuario = await modelUsuario.create(body);
			return usuario;
		}
	}

	async updatePassword(body) {
		const { email, senha, senhaAntiga } = body;

		const user = await modelUsuario.findOne({email: email});

		if (!user || user.senha.trim() !== senhaAntiga) {
			return undefined;	
		} else {
			const usuario = await modelUsuario.updateOne({email: email, $set:{senha: senha}});
			return usuario;
		}
	}

	async find(body) {
		const usuarios = await modelUsuario.find(body).select({_id: 0, nome: 1, email: 1});
		return usuarios;
	}

	async token(body) {
		const { email, senha } = body;

		const user = await modelUsuario.findOne({email: email});

		if (!user || user.senha.trim() !== senha) {
			return undefined;	
		} else {
			return jwt.sign({ sub: user._id }, '5nCBJxElQAByOM5');
		}
	}

}
