const express = require('express');
const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');

const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.static('public'));
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

const messages = [
	{ author: 'Juan', text: '¡Hola! ¿Qué tal?' },
	{ author: 'Pedro', text: 'Muy bien! ¿Y vos?' },
	{ author: 'Ana', text: 'Genial!' }
]

app.get('/',(req,res)=>{
	res.sendFile('index.html')
})

io.on('connection', clienteNuevo => {
	console.log('Un cliente se ha conectado');
	clienteNuevo.emit('messages', messages);
	clienteNuevo.on('new-message', data => {
		messages.push(data);
		io.sockets.emit('messages-push', data);
	})
});

httpServer.listen(PORT, () => {
	console.log(`Server running on PORT ${PORT}`);
});