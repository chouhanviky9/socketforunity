const express = require('express');
const PORT = 8080;

const server = express()
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

  server.get('/get', (req, res) => {
    res.send("hello from this side");
  })
  const { Server } = require('ws');

const wss = new Server({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.on('close', () => console.log('Client disconnected'));
});