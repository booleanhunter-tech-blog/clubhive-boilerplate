const db = require('../models/participants');

function initialize(server) {
	// Creating a new socket.io instance by passing the HTTP server object
	const io = require('socket.io')(server);

    io.on('connection', (socket) => { // Listen on the 'connection' event for incoming sockets
		console.log('A user just connected');

        // Your code goes here:
        
    });

}

module.exports = {
    initialize,
}
