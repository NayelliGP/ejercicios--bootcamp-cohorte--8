let numeros = [1, 3, 13, 23, 523, 328, 123, 6865, 812, 213, 123];
/* numeros.forEach(numero =>{
    document.write(numero + ', ');
}); */

/* forEach recorre todos los elementos de un arreglo */

numeros.forEach(function (elemento){
    document.write(elemento + ', ');
});

// función anonima
/*numeros.forEach(function (elemento) {
    document.write(elemento + ', ');
});*/
/*numeros.forEach(function (numero) {
    document.write(numero + ', ');
});*/
/* numeros.forEach(function (elemento, indice) {
    document.write(elemento + '-' + indice +'<br>');
}); */

let numeros2 = numeros.map(function(elemento){
    return elemento * 2;
});
document.write('<br>' + numeros2 + '<br>');


/* let frutas = ['mango', 'uva', 'piña'];
let frutas2=frutas;

document.write('<br>' + frutas + '<br>');
document.write('<br>' + frutas2 + '<br>');

frutas2.push('pera');
document.write('<br>' + frutas + '<br>');
document.write('<br>' + frutas2 + '<br>'); */

/* let frutas = ['mango', 'uva', 'piña'];
let frutas2=frutas.map(function(elemento){
    return elemento;
});


document.write('<br>' + frutas + '<br>');
document.write('<br>' + frutas2 + '<br>');

frutas2.push('pera');
document.write('<br>' + frutas + '<br>');
document.write('<br>' + frutas2 + '<br>'); */


/* includes */
document.write ('<br>' + numeros.includes('hola') + '<br>' );


/* filter : recorre cada uno de los elementos
    filtra los elementos que cumplan la condición  */

let numerosPares = numeros.filter((elemento) => {
    /* if (elemento % 2 === 0 ){
        return false;
    }else{
        return true;
    } */
  /*   console.log(elemento % 2 == 0); */
    /* return elemento % 2 == 0; */

    if (elemento > 10){
        return true;
    }
});

document.write('<br>' + numerosPares + '<br>');


let frutas = ['Mango', 'Uva', 'Piña', 'Mandarina', 'Manzana', 'Aguacate', 'Sandia'];

let frutasFiltro = frutas.filter((fruta) => {
   /*  if(fruta.includes('m')== true){
        return true;
    } */
    return fruta.toLowerCase().includes('m');
    /* toLowerCase
        toUppercase
    */

});
document.write('<br>' + frutasFiltro + '<br>');



/* sort:  ordena los elementos */
let otrosNumeros = [9, 2, 3, 5, 1, 4, 8, 6, 7]

/* document.write('<br>' + otrosNumeros.sort() + '<br>'); */

/* Reverse  inierte el orden de los elementos de un arreglo */
document.write('<br>' + numeros.reverse() + '<br>');

/* find devuelvesolo un elemento (l primero que encuentre)
    obtiene el primer elemento que cumpla con una condición */

let frutaEncontrada = frutas.find ((elemento) => {
    return elemento.toLowerCase().includes('manzana');
});

document.write('<br>' + frutaEncontrada + '<br>');




