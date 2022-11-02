const { baseDeDatos } = require('./conection');
baseDeDatos.from('cars2').where('id',22).del()
	.then((val) => console.log('Cars deleted: ',val))
	.catch(err => { console.log(err);  })
	.finally(() => baseDeDatos.destroy())