/* Crear un arreglo con 20 números. Mostrar en HTML la suma de dichos números y el promedio. */

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,18,19,20];
let suma = 0;
let promedio = 0 ;



 document.write('<h1> Suma y Promedio de 20 números </h1>');
 document.write('<br><h3> Arreglo </h3><br>' + numeros + '<br>' );


 for(let i = 0; i < numeros.length; i++){
     suma += numeros[i];
     /*suma numero actual y hacia la derecha */
};

 document.write(' <br> <b> La suma de los 20 múmeros es:</b>  ' + suma );

 promedio = suma / numeros.length;

 document.write(' <br> <b>El promedio de los 20 múmeros es:</b>' + promedio );





