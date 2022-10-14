const express = require('express')

const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')
const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)
app.use(express.static('./public'))
// Indicamos que queremos cargar los archivos estáticos que se encuentran en dicha carpeta
app.get('/', (req, res) => { // Esta ruta carga nuestro archivo index.html en la raíz de la misma
    res.sendFile('index.html', {root: __dirname})
})

const messages = [];

httpServer.listen(3000, () => console.log('SERVER ON')) // El servidor funcionando en el puerto 3000
//  Servidor
 io.on('connection', socket => {
    console.log('Usuario conectado')

    // llamo al cliente con el nombre "mi mensaje"
    socket.emit('mi mensaje', messages)

    // escucho mensaje del cliente cuando me llama por "notificacion"
    socket.on('notificacion', data => {
        messages.push({ socketid:socket.id,data:data})
        io.sockets.emit('mensajes',messages)
        console.log(data)
    })
 })

