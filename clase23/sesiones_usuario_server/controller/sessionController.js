const root = (req, res) => {
	if (req.session.contador) {
		req.session.contador++;
		res.status(200).send(`${req.session.nombre} visitaste la página ${req.session.contador} veces`);
	} else {
		const nombre = req.query.nombre || 'x';
		req.session.contador = 1;
		req.session.nombre=nombre
		res.status(200).send(`${nombre} te damos la bienvenida`);
	};
}

const olvidar = (req, res) => {
	try {
		req.session.destroy();
		res.status(200).send('Hasta luego ');
	} catch (error) {
		res.send(500,' '+ error );
	}
}

module.exports = { root, olvidar };