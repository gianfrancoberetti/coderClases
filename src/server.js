const express = require('express');
const app = express();
const socketIO = require('socket.io');
const fs = require('fs');
const { json } = require('body-parser');
// Express
const PORT = 8000;
let lista = []

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) =>{
    res.render('index', {productos: lista})
})











const server = app.listen(PORT, () => console.log(`server on, port ${PORT}`))
//Websockets
const io = socketIO(server);


io.on('connection', (socket) =>{
    console.log('hola');

    socket.on('elproducto', (data) => {
        lista.push(data)
        console.log('Productos:', lista);
    })
    socket.on('chat-mensaje', (data) => {
       const archivo = fs.appendFileSync('./chat.txt', JSON.stringify(data, null, '\t'))
        io.sockets.emit('chat-mensaje', data);
    })
})









