const socket = io();

const chatForm = document.querySelector('#chat-form');
const chatText = document.querySelector('#chat-text');
const chatBox = document.querySelector('#chat-box');

chatText.focus();

chatForm.addEventListener('submit', e => {
    e.preventDefault();
    socket.emit('chat', {
        user: socket.id,
        message: chatText.value
    });
    chatText.value = '';
});

socket.on('messages', messages => {
    chatBox.innerHTML = '';
    messages.forEach(message => {
        chatBox.innerHTML += `
            <p><span>ID: ${message.user}</span> -- ${message.message}</p>
        `;
    })
});