const nombreProducto = document.getElementById('nombre').value;
const precioProducto = document.getElementById('precio').value;
const btn = document.getElementById('submit');

 function AgregarProducto(producto){
    producto.id = lista.length + 1;
    producto.nombre = nombreProducto;
    producto.precio = precioProducto 
    lista.push(producto)

}


export let lista = []

const socket = io();



