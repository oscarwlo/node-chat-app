const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('createMessage', (message) => {
    console.log('Message created', message)
    io.emit('newMessage', {
      from: message.form,
      text: message.text,
      createdAt: new Date().getTime()
    });
  });

  socket.on('disconnect', (socket) => {
    console.log('User disconnected!');
  });
});

server.listen(3000, () => {
  console.log(`Server is up on ${port}`);
});
