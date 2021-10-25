const { Server } = require('ws');
const Port=process.env.PORT ||8080;
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: Port },()=>{
    console.log('server started on '+Port);
})

wss.on('connection', function connection(ws) {
    console.log('connection');
    ws.on('message', function incoming(data, isBinary) {
        console.log(data.toString(),isBinary);
        wss.clients.forEach(function each(client) {
          if (client !== ws && client.readyState === WebSocket.OPEN) {
              console.log(data.toString(),isBinary);
            client.send("true");
          }
        });
      });
})


wss.on('listening',()=>{
   console.log('listening on 8080')
})