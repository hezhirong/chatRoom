var io = require('socket.io')();

io.on('connection', function (socket) {
    console.log(socket.id + ': connection');

	socket.on('chat message', function(msg){
	    console.log('message: ' + msg);

		io.emit('chat message', msg);
	});
});

exports.listen = function (_server) {
    return io.listen(_server);
};