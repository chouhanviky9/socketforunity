const { Server } = require('ws');
const Port=process.env.PORT ||8080;
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: Port },()=>{
    console.log('server started on '+Port);
})
let num=1;

wss.on('connection', function connection(ws) {
    ws.id = num++;
    console.log('connection');
    setInterval(()=>{
      ws.send("live");
    },20000);
    ws.on('message', function incoming(data, isBinary) {
        console.log(data.toString(),isBinary);
        wss.clients.forEach(function each(client) {
            console.log(client.id);
//           if (client !== ws && client.readyState === WebSocket.OPEN) {
              console.log(data.toString(),isBinary);
            client.send("true");
//           }
        });
      });
})


wss.on('listening',()=>{
   console.log('listening on 8080')
})
