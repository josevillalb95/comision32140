const express = require('express');
const session = require('express-session');
const router = require('./routes/router');
const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const mongoose = require('mongoose');
const User = require('./models/model');

const config ={
    'CONSUMERKEY': process.env.CONSUMERKEY||'-',
    'CONSUMERSECRET': process.env.CONSUMERSECRET||'-',
    'URLDB':process.env.URLDB||'-',
    'PORT':process.env.PORT||'8080'
}
const PORT = config.PORT;
const app = express();

app.use(
	session({
		secret: 'keyboard cat',
		cookie: { httpOnly: false, secure: false, maxAge: 60000 },
		rolling: true,
		resave: true,
		saveUninitialized: false,
	})
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
	new TwitterStrategy(
		{
			consumerKey: config.CONSUMERKEY,
			consumerSecret: config.CONSUMERSECRET,
			callbackURL: `http://localhost:${PORT}/auth/twitter/callback`,
		},
		(token, tokenSecret, profile, done) => {
			const newUser = { username: profile.id, password: '' };
			User.create(newUser, (error, user) => {
				done(null, user);
			});
		}
	)
);

passport.serializeUser((user, done) => done(null, user._id));
passport.deserializeUser((id, done) => User.findById(id, done));

app.use(router);

app.listen(PORT, async () => {
	await mongoose.connect(config.URLDB);
	console.log(`Server listening on port ${PORT}`);
});
