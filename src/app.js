const express = require('express');
const app = express();

app.get('/greet', function (req, res) {
    res.send('Hello World')
});

module.exports = app;