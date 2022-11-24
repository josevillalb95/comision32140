const setCookie = (req, res) => {
	let { clave, valor , firmada,tiempo} = req.query;
	const settings={}
	if (!clave || !valor) 
		return res.status(400).send('Faltan valores a enviar');
	if (tiempo)
		settings['maxAge']=parseInt(tiempo)
	if (firmada) 
		settings['signed']= true
	res.cookie(clave, valor,settings).json( { proceso: 'ok'});
}

const getCookie = (req, res) => {
	const cookie = req.cookies;
	const cookieFirmadas = req.signedCookies;
	res.status(200).json({ cookie ,cookieFirmadas});
}

const clearCookie = (req, res) => {
	const { clave } = req.query;
	res.clearCookie(clave).send(`Cookie ${clave} eliminada`);
}

module.exports = { setCookie, getCookie, clearCookie };