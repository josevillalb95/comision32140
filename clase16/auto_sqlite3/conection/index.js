const options = {
	client: 'sqlite3',
	connection: {
		filename:'./db.sqlite'
	}
}
const baseDeDatos = require('knex')(options)
module.exports = {
	baseDeDatos
}