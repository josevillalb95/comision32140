const express = require('express');
const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'index.html');
});

const messages = [];

io.on('connection', socket => {
    console.log('¡Nuevo cliente conectado!');
    io.sockets.emit('messages', messages);
    socket.on('chat', chat => {
        console.log(chat);
        messages.push(chat);
        io.sockets.emit('messages', messages);
    })
});

httpServer.listen(8080, () => console.log('Server ON'));