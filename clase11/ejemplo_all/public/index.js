
// paso 1 conexion socket
const socket = io(); // Ya podemos empezar a usar los sockets desde el cliente :
// paso 3 conexion socket
socket.emit('notificacion', new Date().toISOString() )
// paso 6 conexion socket
socket.on('mensaje',(data)=>{
    console.log("call")
    const parrafo = document.querySelector('.msj');
    parrafo.innerHTML= ""
    if(data.length){
        data.forEach((message,index) => {
            parrafo.innerHTML += `
                <p><span>${index}) ${message}</p>
            `;
        })
    }
})
