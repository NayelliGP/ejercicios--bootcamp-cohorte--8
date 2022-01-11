/* let miObjeto = {
    //pares de claves  clave:'valor'
    nombre: 'carlos Eduardo'
} */

let nombre = 'Carlos Eduardo';
let edad = 31;
let direccion = 'villahermosa, Tabasco';
let numero = 2121212121;

console.log (nombre);

let persona = {
    nombre:{
        apellidoPaterno: 'Jesus',
        apellidoMaterno: 'Leon',
        nombre: 'Carlos Eduardo'
    },
/*     sumar: function(num1, num2){
        return num1 + num2

    }, */
    edad: 31,
    direccion: {    //otro objeto
        ciudad: 'villahermoa',
        estado: 'Tabasco'
    },
    numero: [    //arreglo
        12322423409,
        46005053343
    ]
};

console.log (persona.nombre);
/* console.log (persona.sumar(4,5)) */

/* arreglos vs objetos 
    almacenar información 
    ['valor1', 'valor2', 'valor3'];
    arreglo[1];

  let otroObjeto  {
        nombre:'mndjsnd',
        apellidos: 'djdmlw'
    }
    otroObjeto.nombre;
*/
