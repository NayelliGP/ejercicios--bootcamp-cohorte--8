/*
variable   var se utilizaba anteriormente, son variables globales.
Variable let es una variable de contexto (variable local), solo viene en un bloque de código.
*/

var numero = 40;
console.log(numero); //40

if(true){
    var numero =50;
    console.log(numero); //50
}
console.log(numero); //50


var texto= 'Bootcamp Java'; // Bootcamp Java
console.log(texto)

if(true){
    let texto = 'cohorte 8'; // cohorte 8
    console.log(texto); 
    //let numeroFavorito = 76; // solo existe dentro del if y no en todo el programa
}
//console.log(numeroFavorito);
console.log(texto); //Bootcamp Java
    
// las laves {} delimitan a un bloque de código