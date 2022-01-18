/* Código sincrono */

let variableSincrona;
variableSincrona = 10 * 3;
console.log(variableSincrona);

/* Código asincrono */
let variableAsincrona;

setTimeout(() => {//ejecuta el codigo despues de un tiempoa una hora determinada
    variableAsincrona = 10 * 3; 
    console.log(variableAsincrona);

}, 2000);  //milisegungos 2000 = 2 segundos

console.log(variableAsincrona);