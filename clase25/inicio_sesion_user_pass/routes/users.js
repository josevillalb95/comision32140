const router = require('express').Router();
const { login, registerUser, logout, home, perfil} = require('../controllers/controller');

router.get('/', home);
router.get('/datos', perfil);
router.get('/register', (req, res) => res.render('register.handlebars'));
router.post('/registerUser', registerUser );
router.post('/login', login);
router.post('/logout',logout);

module.exports = router;