# Normalizar JSON

## Normalizar la estructura del objeto en formato JSON empresa.json (disponible en la carpeta de la clase) que describe el organigrama de una empresa. El gerente y el encargado figuran en el array de empleados de la empresa.

1. Imprimir por consola el objeto normalizado y la longitud del objeto original y del normalizado. Comparar los resultados.

-   Nota: En adelante, utilizar la siguiente función 'print' para imprimir el contenido de un objeto:

```javascript
const util = require('util');

function print(objeto) {
	console.log(util.inspect(objeto, false, 12, true));
}

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
```
