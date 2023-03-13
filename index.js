const express = require('express');

const routes = require('./src/routes')
const dbConnection = require('./src/setup/connection')

require('dotenv').config()

const app = express();

dbConnection.connect()

app.use(routes)

app.listen(process.env.PORT, () => {
	console.log(`Servidor rodando na porta ${process.env.PORT}`);
})
