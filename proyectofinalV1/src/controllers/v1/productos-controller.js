const fs = require('fs')
 let listaProductos = [];

const formularioProductos = (req, res) => {
    res.render('formulario')
}

const listarProductos = (req,res) => {
    res.render('productos', {productos: listaProductos});
};
const agregarProducto = (req, res) => {
    function guardarProducto(producto){
        producto.id = listaProductos.length + 1;
        producto.stock = 100;
        listaProductos.push(producto);
        const archivo = fs.writeFileSync('./productos.txt', JSON.stringify(listaProductos, null, '\t'));
    };
    guardarProducto(req.body);
    console.log(listaProductos);
    
    res.render('productos', {productos: listaProductos});
}
const productoPorId = (req,res) => {
    const {prductoId} = req.params;
    const index = listaProductos.findIndex((item) => item.id == prductoId);
    if(index !== -1){
        res.json({data: listaProductos[index]});
    }else {
        res.status(404).json({});
    }

}
const actualizarProducto = (req, res) => {
    const id = parseInt(req.params.prductoId);
    const {nombre, precio, imagen, descripcion, stock} = req.body;
    const index = listaProductos.findIndex((item) => item.id == id);
    if(index !== -1){
        listaProductos[index] = {
                nombre,
                precio,
                imagen,
                descripcion,
                id,
                stock
        }
        res.json({data: listaProductos[index]});
    }else {
        res.status(404).json({});
};
}
const borrarProducto = (req, res) => {    
    const  id = parseInt(req.params.id);
    const {nombre, precio, imagen, descripcion, stock} = req.body;
    lista = listaProductos.filter(producto => producto.id !== id)

    res.json(lista)

}




module.exports = {
    listaProductos,
    listarProductos,
    agregarProducto,
    actualizarProducto,
    borrarProducto,
    formularioProductos,
    productoPorId
};
