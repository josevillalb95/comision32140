const mongoose = require('mongoose');
const usuarios = require('./models/usuarios.js');
const INIT = async () => {
	const user =PROCESS.ENV.userMongo||'profe'
	const pass=PROCESS.ENV.passMongo||'asd123'
	const databaseName=PROCESS.ENV.dbName||'ecommerce'
	const DB_URL = `mongodb+srv://${user}:${pass}@cluster0.ycmrr2m.mongodb.net/?retryWrites=true&w=majority&dbName=${databaseName}`;
	// si queremos una base especifica podemos agregar el ultimo 
	// querystring &dbName=ecommerce
	try {
		await mongoose.connect(DB_URL)
		await usuarios.insertMany({nombre: 'Federico', apellido: 'Perez', dni: '320118321' });
		console.log( await usuarios.find() )
	} catch (err) {
		console.log(err);
	}
}

INIT();





