const productosController = require('./productos-controller')
const carritoJs = require('./app')
const fs = require('fs')


let carrito = [];
const listaCarrito = (req, res) => {
    
    res.render('carrito', {productos: carrito})
}
const agregarAlCarrito = (req, res) => {
    console.log('hola')
    const archivo = fs.writeFileSync('./carrito.txt', JSON.stringify(listaProductos, null, '\t'));
    console.log(carrito);
    res.render('carrito', {productos: carrito});
};
    

const borrarDelCarrito = (req, res) => {
    res.send('probando');
}




module.exports = {
    listaCarrito,
    agregarAlCarrito,
    borrarDelCarrito
}