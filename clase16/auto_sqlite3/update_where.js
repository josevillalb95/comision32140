const { baseDeDatos } = require('./conection');
baseDeDatos.from('cars2').where('id', '23').update({ stock: 0 })
	.then((cant) => console.log('Car updated: ',cant))
	.catch(err => { console.log(err); throw err })
	.finally(() => baseDeDatos.destroy())