const express = require('express');
const app = express();
const exampleRoute = require('./routes/');
require('./mongo-connection');

app.use('/ekin', exampleRoute);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = app;
