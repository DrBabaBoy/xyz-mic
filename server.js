const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('Un cliente se ha conectado');

    socket.on('audio', (data) => {
        socket.broadcast.emit('audio', data);
    });

    socket.on('disconnect', () => {
        console.log('Un cliente se ha desconectado');
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
