const listarProductos = (req,res) => {
    res.render('productos');
};
const agregarProducto = (req, res) => {
    res.send('productoagregado');
}
const actualizarProducto = (req, res) => {
    res.send('actualizar producto.');
}
const borrarProducto = (req, res) => {
    res.send('producto borrado');
}




module.exports = {
    listarProductos,
    agregarProducto,
    actualizarProducto,
    borrarProducto,
}