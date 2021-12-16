/*
Ejercicio 
Crea una función que calcule el descuento que se le va a hacer a un cliente  según el valor de su compra. 
Si es una compra de menos de 100, se le hará un descuento del 10%. (0-99) 
Si es una compra de 100 hasta menos de 200 se le hará un descuento del 20%.(100 - 199) y 
si es una compra de más de 200 se le hará un descuento del 30%. (200 =>) 
 Utiliza prompt, funciones, condicionales y operadores de comparación.  
 La función debe pedir el precio al cliente, e imprimir el resultado del precio menos el descuento
 ya sea en pantalla o en consola.

(Se guardará en un archivo nuevo llamado ejercicioFunciones.js)

*/
function totalCompra(compra){
    
    if(compra <100){
        descuento = compra * .10;
    }else if(compra>= 100 && compra<200){
        descuento=compra * .20;
    }else if( compra>=200){
        descuento = compra * .30;
    }
document.write (' <h1> Total a pagar incluido el descuento: $' + descuento + 'pesos </h1>')

}

const compra = parseInt(prompt('De cuanto fue tu compra')); 
totalCompra (compra);

