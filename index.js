const express = require('express');
const app = express();
const config = require('./config.json')
const port = config.port;

app.get('/', (req, res) => {
    res.sendFile(__dirname + config['index.html']);
});
app.get('/style.css', function(req, res) {
    res.sendFile(__dirname + config['style.css']);
});
app.get('/canvas.js', function(req, res) {
    res.sendFile(__dirname + config['canvas.js']);
});
app.get('/refresh.js', function(req, res) {
    res.sendFile(__dirname + config['refresh.js']);
});
app.get('/favicon.png', function(req, res) {
    res.sendFile(__dirname + config['favicon.png'])
})
app.get('/github.ico', function(req, res) {
    res.sendFile(__dirname + config['github.ico'])
})


app.listen(port, () => { 
    console.log(`Running on port: ${port}`);
});