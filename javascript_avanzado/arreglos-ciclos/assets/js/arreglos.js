/* const numeros = [5]; */

let numeros = new Array ();
numeros = [1, 3, 13, 23, 523, 328, 123, 6865, 812, 213, 123];

/* document.write(numeros[5]); */

console.log(numeros.length);

for(let i = 0; i < numeros.length; i++){

    document.write(`${numeros[i]} <br/>`);

   /*  const numero = numeros[i];
    document.write(numero + '<br>'); */

};