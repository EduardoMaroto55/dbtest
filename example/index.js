const server = require('./gateway/server');

const port = process.env.port || 3000;

server.listen(port,() => {
    console.log('Server is running on port ' + port);
});