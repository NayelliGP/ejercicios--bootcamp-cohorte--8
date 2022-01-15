
let palabra = "Hola Mundo";

function invertirPalabra(cadena){
    return cadena.split("").reverse().join("");
};
document.write(`<h1> Ejercico de invertir palabra</h1>`);
document.write(`<p> Palabra original: <b>${palabra} </b> </p>`);
document.write(`<p> Palabra invertida : <b> ${invertirPalabra(palabra)}</b> </p>`);


//split() divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas.

//reverse() invierte el orden de los elementos de un array in place

//join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.