const express = require('express');
const app = express();
const PORT = 8080;
const server = app.listen(PORT, () => { console.log(`Server running on PORT ${PORT}`) });
server.on('error', err => { console.log(`Error: ${err}`) });
app.use(express.static('public'));