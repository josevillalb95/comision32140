const socket = io.connect();

const render = data => {
	const html = data.map((elem, index) => {
		return (
			`<div>
				<strong>${elem.author}</strong>:
				<em>${elem.text}</em>
			</div>`)
	}).join(' ');
	document.querySelector('#messages').innerHTML = html;
};

const renderAdd = data => {
	const html = `
		<strong>${data.author}</strong>:
		<em>${data.text}</em>
	`
	const div =document.createElement('div')
	div.innerHTML=html
	document.querySelector('#messages').append(div);
};

const addMessage = e => {
	const message = {
		author: document.querySelector('#username').value,
		text: document.querySelector('#text').value
	};
	socket.emit('new-message', message);
	return false;
}

socket.on('messages', data => {
	render(data);
})
socket.on('messages-push', data => {
	renderAdd(data);
})