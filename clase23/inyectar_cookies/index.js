const express = require('express');
const cookieParse = require('cookie-parser');
const router = require('./routes/cookiesRouter');
const app = express();
const PORT = 8080;

app.use(cookieParse('comision32140'));
app.use('/cookies', router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));