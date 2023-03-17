const mongoose = require('mongoose');

const contadorSchema = mongoose.Schema({
	name: String,
	seq: Number
});

module.exports = mongoose.model('contador', contadorSchema);
