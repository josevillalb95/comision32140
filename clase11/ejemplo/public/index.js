

const socket = io(); // Ya podemos empezar a usar los sockets desde el cliente :)
// Cliente

// escuchar cuando el servidor emit un  "mi mensaje"
socket.on('mi mensaje', data => {
    const reg='hola me conecte a las '+new Date().toISOString()
    // llamo al sevidor con notificacion
    socket.emit('notificacion', reg)
})

// escuchar cuando el servidor emit un  "mensajes"
socket.on('mensajes', data => {
    const parrafo = document.querySelector('.msj');
    parrafo.innerHTML= ""
    if(data.length){
        data.forEach((message,index) => {
            parrafo.innerHTML += `
                <p><span>${index}) ID: ${message.socketid}</span> -- ${message.data}</p>
            `;
        })
    }
})

