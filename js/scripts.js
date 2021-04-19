// querySelector
// const heading = document.querySelector('h1') //0 o 1 Elementos
// console.log(heading);


// Hello World
console.log('Hello world');

//Generar enlace
// const nuevoEnlace = document.createElement('H1')

//Agregar href
// nuevoEnlace.href = 'nuevo-enlace.html';

//agregar texto 
// nuevoEnlace.textContent = 'Un nuevo enlace';

//agregar clase
// nuevoEnlace.classList.add('navegacion_enlace');

// Agregarlo al documento
// const navegacion = document.querySelector('.navegacion-principal')
//navegacion.appendChild(nuevoEnlace);

//Eventos
console.log(1);

/*
window.addEventListener('load', function() { //load espera a que el JS y el HTML este listo
    console.log(2);
})

windows.onload = function() {
    console.log(3);
}
*/

document.addEventListener('DOMContentLoaded', function() {
    console.log(4);
});

//Seleccionar elementos y asociarles un evento
const btnEnviar = document.querySelector('.boton--principal');
btnEnviar.addEventListener('click', function(evento) {
    console.log(evento);
    evento.preventDefault();
    console.log('enviando formulario');
});