/* Funciones
    Es un bloque de código reutilizable.
    Puede tener o no parametros de entrada.
    Puede devolver o no un valor.
 */

    function sumar(numero1, numero2){
        //operaciones o código a ejecutar
        return numero1 + numero2; //devuleve el valor y debe de ser la ultia instrucción
        console.log('Hola desde la función');
    }
    function restar(numero1, numero2){ 
        document.write (`La resta de ${numero1} y ${numero2} es ${numero1 - numero2} <br>`);
    }

    let numero1 = parseInt(prompt('Número 1'));
    let numero2 = parseInt(prompt('Número 2'));
    let suma = sumar(numero1, numero2);

    // teplate string
    // `bastic o comilla ivertida `

    document.write(`La suma de ${numero1} y ${numero2} es ${suma} <br>`);
    restar(numero1, numero2);
    document.write ('La suma de ' + numero1 + ' y ' + numero2 + ' es ' + suma)

    //comilla ivertida ``
    // // ]`´ `d 







