const express = require('express');
const app = express();
const socketIO = require('socket.io');
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
        io.sockets.emit('elproducto', data)
    })
})









