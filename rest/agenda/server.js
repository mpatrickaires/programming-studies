// Importar a biblioteca do HTTP
const http = require('http');

// Include (importar) do deploy do app.js no servidor
const app = require('./app');

// Configurar porta do servidor
const port = process.env.PORT || 3000;

// Criar servidor com app.js incluso
const server = http.createServer(app);

// Servidor escutar porta
server.listen(port);
