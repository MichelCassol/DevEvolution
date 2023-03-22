const modelProdutos = require('../models/modelProduto')

module.exports = class ProdutoService {

	async createAllProducts(products) {
		const produtos = await modelProdutos.create(products);
		return produtos;
	}

	async create(body) {
		const produto = await modelProdutos.create(body);
		return produto;
	}

	async deleteOne(_id_produto) {
		const produto = await modelProdutos.deleteOne({_id: _id_produto})
			.then((prod) => {
				return prod;
			})
			.catch(() => {
				return { erro: 'id do produto incorreto' };
			});
		return produto;
	}

	async updateOne(_id_produto, body) {
		const produto = await modelProdutos.updateOne({_id: _id_produto},{$set: body})
			.then((prod) => {
				return prod;
			})
			.catch(() => {
				return { erro: 'id do produto incorreto' };
			});
		return produto;
	}

	async find(body) {
		const produtos = await modelProdutos.find(body);
		return produtos;
	}

	async findOne(_id_produto) {
		const produto = await modelProdutos.findOne({_id:_id_produto})
			.then((prod) => {
				return prod;
			})
			.catch(() => {
				return { erro: 'id do produto incorreto' };
			});
		return produto;
	}
}
