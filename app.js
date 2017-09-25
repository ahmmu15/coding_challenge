const fs = require('fs');
const path = require('path')
const express = require('express');
const app = express();

const EXPRESS_PORT = 3000;

app.use(express.static('public'))

function generateRandomWait() {
    //so that's why my connection is slow all the time!
    //JK :D 
    return Math.floor(Math.random() * 10000) + 500;
}

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

app.get('/api/users', (req, res) => {
    fs.readFile(path.resolve(__dirname, 'users.json'), 'utf8', (err, data) => {
        setTimeout(() => {
            res.json(JSON.parse(data));
        }, generateRandomWait());
    });
});

app.listen(EXPRESS_PORT, () => console.log(`Server is running on http://localhost:${EXPRESS_PORT}/ ... [ctrl+click to open the link :)]`));