import Server from 'socket.io';
import {Gpio} from 'onoff';

export default function startServer(store) {
	const io = new Server().attach(8090);

	store.subscribe(
		() => io.emit('state', store.getState().toJS())
	);

	io.on('connection', (socket) => {
		var address = socket.handshake.address;
		console.log('New connection');
		socket.emit('state', store.getState().toJS());
		socket.on('action', store.dispatch.bind(store));
	});


	console.log('Server started');
}