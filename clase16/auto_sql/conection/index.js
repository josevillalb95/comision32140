const options = {
	client: 'mysql',
	connection: {
		host: '127.0.0.1',
		user: 'root',
		password: '',
		database: 'test'
	}
}
const baseDeDatos = require('knex')(options)

module.exports = {
	baseDeDatos
}