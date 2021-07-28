const socket = io();

//DOM ELEMENTS
const nombreProducto = document.getElementById('nombre');
const precioProducto = document.getElementById('precio');
const imagenProducto = document.getElementById('imagen');
const btn = document.getElementById('submit');

let lista = []
btn.addEventListener('click', () =>{
    socket.emit('elproducto', {
        nombre: nombreProducto.value,
        precio: precioProducto.value,
        imagen: imagenProducto.value
    })
})

socket.on('elprodcuto', (data) =>{
    console.log(data)
})





