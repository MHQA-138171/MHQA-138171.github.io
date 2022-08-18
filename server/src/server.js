const http = require('http');

require('dotenv').config();

const { loadUsers } = require('../models/users.model');

const app = require('./app');

const PORT = process.env.PORT;

const server = http.createServer(app);

async function startServer() {
    await loadUsers();
    server.listen(PORT, () => {
        console.log(`listening on ${PORT}...`)
    })
}
startServer();
