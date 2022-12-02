let users = [];
const login = (req, res) => {
	if (req.session?.nombre) res.redirect('/datos');
	else {
		const { name, password } = req.body;
		const user = getUser(name);
		if (user && user.password === password) {
			req.session.nombre = name;
			res.redirect('/datos')
		} else 
			res.redirect('/?msj=Credenciales erroneas')
	}
}
const registerUser =  (req, res, next) => {
	const { name, password, address , isAdmin} = req.body;
	if( getUser(name) )
		res.redirect('/?msj=usario existente')
	users.push({ name, password, address, isAdmin});
	res.redirect('/')
};
const home= (req, res) => {
	console.log(req.query)
	let msj=req.query.msj
	res.render('login.handlebars',{msj})
}
const perfil =  (req, res, next) => {
	if (!req.session.nombre) 
		return res.redirect('/?msj=sin permiso');
	const contador=(req.session?.contador||0)+1
	req.session.contador = contador
	const user = getUser(req.session.nombre);



	user.contador=contador
	res.render('datos.handlebars', { user, isAdmin:true});
}
const logout =  (req, res, next) => {
	req.session.destroy();
	res.redirect('/');
}
const getUser = name => users.find(user => user.name === name);
module.exports = { login,logout, registerUser, getUser,home,perfil };