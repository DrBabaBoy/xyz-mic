const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Sirve los archivos estáticos desde la carpeta public
app.use(express.static('public'));

// Manejo de conexiones Socket.IO
io.on('connection', (socket) => {
    console.log('Un cliente se ha conectado');

    socket.on('audio', (data) => {
        // Reenvía el audio recibido a todos los demás clientes
        socket.broadcast.emit('audio', data);
    });

    socket.on('disconnect', () => {
        console.log('Un cliente se ha desconectado');
    });
});

// Inicia el servidor en el puerto 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
