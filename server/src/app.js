const path = require('path');

const express = require('express');

const usersRouter = require('./routers/users.router');

const app = express();

app.use('/users', usersRouter);
app.use(express.static(path.join(__dirname, '..', 'Public')));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'Public', 'index.html'))
})

module.exports = app;