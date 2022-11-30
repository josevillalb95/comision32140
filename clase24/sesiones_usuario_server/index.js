const express = require('express');
const router = require('./router/sessionRouter');
const sesiones = require('./sesion');
const app = express();
const PORT = process.env.PORT||8080;
app.use(sesiones.mongo);
app.use('/session', router);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));