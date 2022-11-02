const { baseDeDatos } = require('./conection');
const cars = [
	{ name: 'Audi', price: 52642, code:'2133' , stock:40 },
	{ name: 'Mercedes', price: 57127, code:'3411' , stock:43 },
	{ name: 'Peugueot', price: 9000, code:'23314' , stock:23 },
	{ name: 'Volvo', price: 29000 , code:'21323' , stock:45},
	{ name: 'Volkswagen', price: 41400, code:'214433' , stock:54 },
	{ name: 'Citroen', price: 21000 , code:'2w133' , stock:49},
	{ name: 'Hummer', price: 350000 , code:'213f3' , stock:8},
]
baseDeDatos('cars2').insert(cars)
	.then(PrimerID => console.log('primer id: ',PrimerID,' ultimo id: ', PrimerID+cars.length ) )
	.catch(err => { console.log(err); })
	.finally(() => baseDeDatos.destroy()) 
