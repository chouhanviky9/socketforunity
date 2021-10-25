const { Server } = require('ws');
const WebSocket = require('ws');
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

// var socket = socketClient ("https://socketforunity.herokuapp.com/");
//  socket.emit("connection",(res)=>{
//      console.log(res);
//  })

// socket.on('connect', function(){
//     console.log("connected")
// });

wss.on('listening',()=>{
   console.log('listening on 8080')
})