const { baseDeDatos } = require('./conection');
baseDeDatos.schema.createTable('cars2', table => {
	table.increments('id')
	table.string('name')
	table.string('code')
	table.integer('stock')
	table.integer('price')
})
.then(() => console.log('Table created'))
.catch(err => { console.log(err); })
.finally(() => baseDeDatos.destroy())