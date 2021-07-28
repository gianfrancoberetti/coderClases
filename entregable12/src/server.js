const express = require('express');
const app = express();
const socketIO = require('socket.io');

// Express
const PORT = 8000;

import {lista} from './public/scripts'

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) =>{
    res.render('index', {productos: lista})
})











const server = app.listen(PORT, () => console.log(`server on, port ${PORT}`))
//Websockets
const IO = socketIO(server);


IO.on('connection', () =>{
    console.log(AgregarProducto(producto));
})













