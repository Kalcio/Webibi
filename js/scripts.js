// querySelector
const heading = document.querySelector('h1') //0 o 1 Elementos
console.log(heading);


// Hello World
console.log('Hello world')

//Generar enlace
const nuevoEnlace = document.createElement('H1')

//Agregar href
nuevoEnlace.href = 'nuevo-enlace.html';

//agregar texto
nuevoEnlace.textContent = 'Un nuevo enlace';

//agregar clase
nuevoEnlace.classList.add('navegacion_enlace');


console.log(nuevoEnlace)
