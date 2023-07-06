const express = require('express');
const WebSocket = require('ws');

const PORT = 8000;

const app = express();
const wss = new WebSocket.Server({ port: 8080 });

app.use(express.json());

wss.on('connection', function connection(ws) {
  console.log('Connected');

  ws.on('message', function incoming(message) {
    const buffer = Buffer.from(message);
    const str = buffer.toString('utf-8');

    console.log('Received command:', str);
    // Send command to Arduino via WebSocket
    ws.send(str);

    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(str);
      }
    });
  });

  ws.on('close', function close() {
    console.log('Disconnected');
  });
});

app.listen(PORT, () => {
  console.log('Server listening on port, ', PORT);
});
