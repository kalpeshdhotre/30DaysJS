import WebSocket, { WebSocketServer } from "ws";
// const WebSocket = require("ws");
const wsServer = new WebSocketServer({ port: 8080 });

let clients = {};

wsServer.on("connection", (ws) => {
  const clientId = generateUniqueID();
  clients[clientId] = ws;

  console.log(`Client ${clientId} Connected`);

  ws.on(`message`, (data) => {
    // console.log(`Received msg: ${data}`);
    const message = JSON.parse(data);
    // console.log(message);

    // Broadcast message to all clients except the sender
    wsServer.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(message));
      }
    });
  });
  ws.on(`close`, () => {
    console.log(`Client disconnected`);
  });
});

function generateUniqueID() {
  return Math.random().toString(36).substr(2, 9);
}
