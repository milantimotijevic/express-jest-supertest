const app = require('./app');

const server = app.listen(3000);

server.on('listening', () => {
	console.log('Server listening on port 3000');
});