const normalizr = require('normalizr');
const normalizar = normalizr.normalize;
const desnormalizar = normalizr.denormalize;
const util = require('util');
const holding= require('../holding.json')
const usersSchema = new normalizr.schema.Entity('users');
const empresaSchema = new normalizr.schema.Entity('empresa',{
	gerente:usersSchema,
	encargado: usersSchema,
	empleados: [usersSchema]

});
const holdingSchema = new normalizr.schema.Entity('holding', {
	empresas: [empresaSchema]
});

const data_normalizada = normalizar(holding, holdingSchema);
const utils = (objeto) => {
	console.log(util.inspect(objeto, false, 12, true));
}
utils(data_normalizada);
console.log('Antes: ', JSON.stringify(holding).length);
console.log('Después: ', JSON.stringify(data_normalizada).length);
