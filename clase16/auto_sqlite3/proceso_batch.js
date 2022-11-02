const { baseDeDatos } = require('./conection');

(async () => {
    const cars = [
        { name: 'Audi', price: 52642, code:'2133' , stock:40 },
        { name: 'Mercedes', price: 57127, code:'3411' , stock:43 },
        { name: 'Peugueot', price: 9000, code:'23314' , stock:23 },
        { name: 'Volvo', price: 29000 , code:'21323' , stock:45},
        { name: 'Volkswagen', price: 41400, code:'214433' , stock:54 },
        { name: 'Citroen', price: 21000 , code:'2w133' , stock:49},
        { name: 'Hummer', price: 350000 , code:'213f3' , stock:8},
    ]
	try {
		console.log('--> Borramos todos los autos');
		await baseDeDatos('cars2').del()

		console.log('--> Insertamos autos');
		await baseDeDatos('cars2').insert(cars)

		console.log('--> Leemos todos los autos');
		let rows = await baseDeDatos.from('cars2').select('*')
		for (row of rows) console.log(`${row['id']} ${row['name']} ${row['price']}`);

		console.log('--> Insertamos un auto más');
		await baseDeDatos('cars2').insert({ name: 'Fiat', price: 7777 })

		console.log('--> Leemos los autos actualizados');
		rows = await baseDeDatos.from('cars2').select('*')
		for (row of rows) console.log(`${row['id']} ${row['name']} ${row['price']}`);
	}
	catch (err) {
		console.log(err);
	}
	finally {
		baseDeDatos.destroy();
	}
})()