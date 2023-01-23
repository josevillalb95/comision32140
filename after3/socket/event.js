const messages=[]
export const socketEvent=(io)=>{
    io.on('connection', socket => {
        io.sockets.emit('messages', messages);
        socket.on('chat', chat => {
            messages.push(chat);
            io.sockets.emit('messages', messages);
        })
    });
}