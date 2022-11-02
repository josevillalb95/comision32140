const { baseDeDatos } = require('./conection');
baseDeDatos.from('cars2').select('*')
	.then(rows => {
		// rows.forEach(row => {
		// 	console.log(`${row['id']} ${row['name']} ${row['price']} ${row['stock']}`);
		// });
		for (row of rows) {
			console.log(`${row['id']} ${row['name']} ${row['price']} ${row['stock']}`);
		}
	})
	.catch(err => console.log(err))
	.finally(() => baseDeDatos.destroy())