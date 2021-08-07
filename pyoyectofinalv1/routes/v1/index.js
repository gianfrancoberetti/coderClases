const { Router } = require('express');
const carritoController = require('../../controllers/v1/carrito-controller')
const productosController = require('../../controllers/v1/productos-controller')




const createRoutesv1 = (app) =>{
    
    //Productos
    app.get('/productos/listar/:id?', productosController.listarProductos);
    app.post('/productos/agregar', productosController.agregarProducto);
    app.put('/productos/actualizar/:id', productosController.actualizarProducto);
    app.delete('/productos/borrar/:id', productosController.borrarProducto);
    //Carrito
    app.get('/carrito/listar/:id?', carritoController.listaCarrito);
    app.post('/carrito/agregar', carritoController.agregarAlCarrito);
    app.delete('/carrito/borrar/:id', carritoController.borrarDelCarrito);
    
}




module.exports = createRoutesv1