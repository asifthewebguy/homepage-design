const { log } = require('console');
const express = require('express');
const app = express();
const port = 8080;
app.use(express.static('dist'));
app.use(express.static('src'));
app.use(express.static('assets'));

app.get('/', (req, res) => {
    res.send('index.html');

});

app.listen(port, () => {
    console.log(`DEV server listening on port ${port}`);
    console.log(`http://localhost:${port}`);
    console.log('Press Ctrl+C to quit.');
});