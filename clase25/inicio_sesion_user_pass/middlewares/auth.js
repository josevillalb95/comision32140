const loginUser = (req, res, next) => {
	if (req.session?.nombre) next();
	else res.render('/');
}

module.exports = loginUser;