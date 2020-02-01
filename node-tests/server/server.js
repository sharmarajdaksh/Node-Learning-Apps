const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page Not Found',
        name: 'Todo App v1.0'
    });
});

app.get('/users', (req, res) => {
    res.status(200).send([
        {
            name: 'Dex',
            age: 20
        },
        {
            name: 'NotDex',
            age: 29
        }]);
});

app.listen(3000);
module.exports.app = app;