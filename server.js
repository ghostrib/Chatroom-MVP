const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/api/messages', (req, res) => {
    console.log(req.body);
    res.send(req.body.post);
});

app.listen(port, () => console.log(`Listening on port ${port}`));


// var app = require('express')();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);
// const bodyParser = require('body-parser');
// const port = process.env.PORT || 5000;

// io.on('connection', function (socket) {
//     console.log('a user connected');
// });

// http.listen(3000, function () {
//     console.log('listening on *:3000');
// });
