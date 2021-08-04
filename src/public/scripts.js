const socket = io();


//DOM ELEMENTS
const nombreProducto = document.getElementById('nombre');
const precioProducto = document.getElementById('precio');
const imagenProducto = document.getElementById('imagen');
const btn = document.getElementById('submit');
const usuario = document.getElementById('usuario');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const chatContainer = document.getElementById('chat-container');
const chatWindow = document.getElementById('chat-window');
const output = document.getElementById('output');

output.classList.add()

let lista = []
btn.addEventListener('click', () =>{
    socket.emit('elproducto', {
        nombre: nombreProducto.value,
        precio: precioProducto.value,
        imagen: imagenProducto.value
    })
})


btnEnviar.addEventListener('click', () =>{
    socket.emit('chat-mensaje', {
        usuario: usuario.value,
        mensaje: mensaje.value
    })
})

socket.on('elprodcuto', (data) =>{
    lista.push(data)
})

socket.on('chat-mensaje', (data) => {
    output.innerHTML += `<p>
        <strong  class="text-primary">${data.usuario}</strong> <span class="text-danger"> </span>: <span class="text-success">${data.mensaje} </span> 
    </p>`
})




