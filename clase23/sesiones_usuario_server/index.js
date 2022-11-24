const express = require('express');
const session = require('express-session');
const router = require('./router/sessionRouter');
const app = express();
const PORT = 8080;

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use('/session', router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));