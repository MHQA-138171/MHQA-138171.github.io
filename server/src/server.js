const http = require('http');

const { loadUsers } = require('../models/users.model');

const app = require('./app');

const PORT = 9000;

const server = http.createServer(app);

async function startServer() {
    await loadUsers();
    server.listen(PORT, () => {
        console.log(`listening on ${PORT}...`)
    })
}
startServer();
