const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 8080 },()=>{
    console.log('server started')
})
wss.on('connection', function connection(ws) {
    console.log('connection');
    ws.on('message', function incoming(data, isBinary) {
        console.log(data.toString(),isBinary);
        wss.clients.forEach(function each(client) {
          if (client !== ws && client.readyState === WebSocket.OPEN) {
              console.log(data,isBinary);
            client.send("true");
         
          }
        });
      });
})
wss.on('listening',()=>{
   console.log('listening on 8080')
})