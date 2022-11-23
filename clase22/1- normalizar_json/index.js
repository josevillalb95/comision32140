const normalizr = require('normalizr');
const util = require('util')
const normalizar = normalizr.normalize;
const desnormalizar = normalizr.denormalize;

// Data
const empresa = {
	id: '1000',
	nombre: 'Coderhouse',
	gerente: {
		id: '2',
		nombre: 'Pedro',
		apellido: 'Mei',
		DNI: '20442639',
		direccion: 'CABA 457',
		telefono: '1567811544',
	},
	encargado: {
		id: '3',
		nombre: 'Pablo',
		apellido: 'Blanco',
		DNI: '20442640',
		direccion: 'CABA 458',
		telefono: '1567811545',
	},
	empleados: [
		{
			id: '1',
			nombre: 'Nicole',
			apellido: 'Gonzalez',
			DNI: '20442638',
			direccion: 'CABA 456',
			telefono: '1567811543',
		},
		{
			id: '2',
			nombre: 'Pedro',
			apellido: 'Mei',
			DNI: '20442639',
			direccion: 'CABA 457',
			telefono: '1567811544',
		},
		{
			id: '3',
			nombre: 'Pablo',
			apellido: 'Blanco',
			DNI: '20442640',
			direccion: 'CABA 458',
			telefono: '1567811545',
		},
		{
			id: '4',
			nombre: 'Ana',
			apellido: 'Rojo',
			DNI: '20442641',
			direccion: 'CABA 459',
			telefono: '1567811546',
		},
		{
			id: '5',
			nombre: 'Lucia',
			apellido: 'Sorbo',
			DNI: '20442642',
			direccion: 'CABA 460',
			telefono: '1567811547',
		},
		{
			id: '6',
			nombre: 'Jose',
			apellido: 'Pieres',
			DNI: '20442643',
			direccion: 'CABA 461',
			telefono: '1567811548',
		},
		{
			id: '7',
			nombre: 'Maria',
			apellido: 'Lopez',
			DNI: '20442644',
			direccion: 'CABA 462',
			telefono: '1567811549',
		},
	],
};

const gerenteSchema = new normalizr.schema.Entity('gerente');
const encargadoSchema = new normalizr.schema.Entity('encargado');
const empleadosSchema = new normalizr.schema.Entity('empleados', {
	gerente: gerenteSchema,
	encargado: encargadoSchema
});

const empresaSchema = new normalizr.schema.Entity('empresa', [{
	empleados: [empleadosSchema]
}]);
// obj - json
// schema



const data_normalizada = normalizar(empresa, empresaSchema);
// console.log('Data normalizada', JSON.stringify(data_normalizada));


// ○ El primer parámetro es el objeto a inspeccionar.
// ○ El segundo parámetro muestra todas las propiedades ocultas y no ocultas.
// ○ El tercer parámetro indica hasta qué profundidad es analizado el objeto.
// ○ El cuarto parámetro colorea la salida.
console.log('Data normalizada',data_normalizada )
console.log('Length data normalizada', JSON.stringify(data_normalizada).length);
console.log('-----------------')

const data_denormalizada = desnormalizar(data_normalizada.result, empresaSchema, data_normalizada.entities);
console.log('Data desnormalizada',util.inspect(data_denormalizada,false,12,true) )
console.log('Length data desnormalizada', JSON.stringify(data_denormalizada).length);