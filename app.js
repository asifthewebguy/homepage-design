const log = require('console');
const express = require('express');
const livereload = require('livereload');
const connectLivereload = require('connect-livereload');
const app = express();
const port = 8080;

const liveReloadServer = livereload.createServer();
app.use(connectLivereload({
    port: 35729
}));
app.use(express.static('dist'));
app.use(express.static('src'));
app.use(express.static('assets'));

liveReloadServer.watch(__dirname + '/dist');
liveReloadServer.watch(__dirname + '/src');
// liveReloadServer.server.once("connection", () => {
//     setTimeout(() => {
//         liveReloadServer.refresh("/");
//     }, 100);
// });


app.get('/', (req, res) => {
    res.send('index.html');
});

app.listen(port, () => {
    console.log(`DEV server listening on port ${port}`);
    console.log(`http://localhost:${port}`);
    console.log('Press Ctrl+C to quit.');
});