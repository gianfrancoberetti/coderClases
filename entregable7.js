const express = require('express');
const fs = require('fs');


const port = 8000;
const app = express();

let cantidad;
const counter = {
    counterItems: 0,
    counterRandom: 0
}
const server = app.listen(port, () => {
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
app.get('/items', (req, res) => {
    counter.counterItems ++;
    let cantidad = lista.length;
    let listaString = JSON.stringify(lista, null, '\n')
    res.send(`${listaString}, tienes un total de: ${cantidad} articulos`);
})
app.get('/random', (req, res) => {
    counter.counterRandom ++;
    let randomId = Math.floor((Math.random() * (2-0 +1) + 1));
    let productosid = JSON.stringify(lista.filter( lista => lista.id === randomId ));
    
    res.send(`${productosid}`)
})
app.get('/visitas', (req, res) => {
    res.send(counter);
})




// tengo un problema con el archivo txt


let producto1 = ({
    title: 'montor',
    price: '$' + 20, 
    thumbnail: 'img',
    id: 1,
})
let producto2 = ({
    title: 'teclado',
    price: '$' + 10, 
    thumbnail: 'img',
    id: 2,
})
let producto3 = ({
    title: 'mouse',
    price: '$' +10, 
    thumbnail: 'img',
    id: 3,
})

let lista = []

lista.push(producto1, producto2, producto3);
