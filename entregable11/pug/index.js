const express = require('express');
const bodyParser = require("body-parser");
const routerProductos = express.Router()


const app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.set('views', './views');
app.set('view engine', 'pug');

const PORT = 8080;

lista = [];
app.use(express.static(__dirname + '/public'))




app.get('/', (req, res) => {
    res.render('form')
})


routerProductos.get('/listar', (req, res) =>{
    console.log(lista)
    res.render('productos', {productos: lista})
    
})
routerProductos.get('/listar/:id',(req, res) => {
    const id = (req.params.id);
    const {nombre, precio, imagen} = req.body;
    const index = lista.findIndex(producto => producto.id == id)
    console.log(lista[index])
    res.render('productos', {productos: lista[index]})
})
routerProductos.post('/guardar', (req, res) =>{  
    guardarProducto(req.body);

    res.render('productos', {productos: lista});
    
})
routerProductos.put('/actualizar/:id',  (req, res) => {
    const id = parseInt(req.params.id);
    const {nombre, precio, imagen} = req.body;
    const index = lista.filter((item) => item.id == id);
    res.render('productos', {productos: lista[index]})

})

routerProductos.delete('/borrar/:id',  (req, res) => {
    const  id = parseInt(req.params.id);
    const {nombre, precio, imagen} = req.body;
    lista = lista.filter(producto => producto.id !== id);

    res.render('productos', {productos: lista});


  })


app.use('/productos', routerProductos);

app.listen(PORT, () => console.log(`server on port ${PORT}`))



// Funciones necesarias
function guardarProducto(producto){
    producto.id = lista.length + 1;
    lista.push(producto);
}



