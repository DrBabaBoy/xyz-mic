const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static('public'));

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('audio', (audioData) => {
    socket.broadcast.emit('audio', audioData);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});