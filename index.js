const { Server } = require('ws');
const Port=process.env.PORT ||8080;
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: Port },()=>{
    console.log('server started on '+Port);
})
let num=1;
const rooms = {};
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
            if(client.id==2){
                client.send("false"
                            }
//           if (client !== ws && client.readyState === WebSocket.OPEN) {
              console.log(data.toString(),isBinary);
                 if(client.id==2){
                client.send("true");
                            }
            
//           }
        });
      });
})


wss.on('listening',()=>{
   console.log('listening on 8080')
})
