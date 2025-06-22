const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8000 });

wss.on('connection', (socket) => {
    console.log('Cliente conectado!');

    socket.on('message', (message) => {
        console.log('Mensagem recebida:', message.toString());

        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message.toString());
            }
        });
    });

    socket.on('close', () => {
        console.log('Cliente desconectado!');
    });
});

console.log('Servidor WebSocket rodando em ws://localhost:8080');