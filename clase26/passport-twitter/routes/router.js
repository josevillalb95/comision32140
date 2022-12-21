const router = require('express').Router();
const passport = require('passport');

router.get('/auth/twitter', passport.authenticate('twitter'));
router.get(
	'/auth/twitter/callback',
	passport.authenticate('twitter', {
		successRedirect: '/',
		failureRedirect: '/login',
	})
);
router.get('/', (req, res) => res.json({ welcome: 'HOME!!' }));
router.get('/login', (req, res) => res.json({ login: 'LOGIN' }));

module.exports = router;
