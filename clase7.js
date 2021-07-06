const express = require('express');
const moment = require('moment');
const port = 8080;
const app = express();

let counter = 0;
const server = app.listen(port, () =>{
    console.log(`el server esta en el puerto numero ${port}`)
})
server.on('error', error => console.log(error));

app.get('/', (req, res) => {
    let html = 
    `<hmtl>
        <body>
            <h1> Hola gianfranco, estas creando un server con expressJs<h1>
        </body>
    </html>`
    res.send(html);
})
app.get('/visitas', (req, res) => {
    counter ++
    res.send(`La cantidad de visitas es de ${counter}`);
})
app.get('/fyh', (req, res) =>{
    let fyh = moment().format('MMMM Do YYYY, h:mm:ss a');
    res.send(fyh)
})