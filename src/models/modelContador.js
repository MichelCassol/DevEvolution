const mongoose = require('mongoose');

const contadorSchema = mongoose.Schema({
	name: String,
	seq: Number
});

const contador = mongoose.model('contador', contadorSchema);

async function getCounter(nome) {
	const primeiroPed = await contador.findOne({name: nome});

	if (!primeiroPed) {
		contador.create({name: nome, seq: 0});
	}

	const id = await contador.findOneAndUpdate({name: nome},{$inc: {seq: 1}},{new: true});
	return id.seq;
}

module.exports = {contador, getCounter};
