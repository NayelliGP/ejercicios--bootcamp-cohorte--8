/* let $titulo =document.getElementById('titulo');  //referencia creada dentro del DOM 
console.log(titulo.textContent);
titulo.textContent= 'Tutul escriito desde JS'; */
//let numero = 10; //llave creada enJS

/* querySelector-trae el primer elemento que encuentre
    .clase- #id -etiqueta  */

let $titulo = document.querySelector('#titulo');
$titulo.textContent = 'Título escrito desde JS'

let $parrafo = document.querySelector('p');
//console.log ($parrafo.textContent);

let $parrafos = document.querySelectorAll('p'); //arreglo con todos los elemento que encuentre
//console.log ($parrafos[1].textContent);

let subtitulo =document.createElement ('h3'); //se cre y se encuentra en memoria y se puede modificar sus caractristicas para que edespues este en el HTML
subtitulo.textContent = 'Este es un subtitulo desde JS'; //modifico el elemento
//document .body(cuerpo del html).append(insercion) = agrega un elemento dentro del body final
//document.body.append(subtitulo); // agregamos el documento
//document.body.insertAdjacentElement("beforebegin",subtitulo); 
$titulo.insertAdjacentElement("afterend",subtitulo); 
$titulo.remove();





let $contenido = document.querySelector('#contenido');
//texto
/* console.log($contenido.textContent = '<br>'); */
//contenido
/* console.log($contenido.innerHTML = '<br>'); */
/* console.log($contenido.outerHTML = 'Hola'); */

let contenidoParrafo = document.createElement('p');
contenidoParrafo.textContent = 'Contenido de mi nuevo parrafo';
$contenido.appendChild(contenidoParrafo);