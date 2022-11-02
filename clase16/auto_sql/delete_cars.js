const { baseDeDatos } = require('./conection');
baseDeDatos.from('cars').del()
	.then(() => console.log('All cars deleted'))
	.catch(err => { console.log(err); throw err })
	.finally(() => baseDeDatos.destroy())