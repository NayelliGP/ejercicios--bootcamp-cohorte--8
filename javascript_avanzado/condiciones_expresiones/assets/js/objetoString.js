let cadena1 ="Hola";
console.log(cadena1);

let cadena2 = new String ("Adiós");//objeto String
console.log(cadena2);

/* let arreglo = new Array();
console.log (arreglo); */

// includes() busca una cadena en otra y regresa true o false 
console.log(cadena2.toLowerCase().includes("a"));
//convierte a miniusculas o mayusculas
console.log(cadena2.toLowerCase());
console.log(cadena2.toUpperCase());

//cohersión y conversión

//cohersión- Javascript convierte en automático un tipo de dato en otro
console.log(cadena1.toLowerCase());

/* Función que recibe una palabra y la regresa invertida*/

let palabra = "Hola Mundo";
let arreglo = palabra.split("");
/* console.log(arreglo); */
/* let arregloInvertido = arreglo.reverse(); */
/* console.log(arreglo.reverse().join("")); */

function invertirPalabra(cadena){
    //metodo split()
    let arreglo = cadena.split(""); //convirtiendo la cadena en un arreglo
    arreglo.reverse();//invirtiendo arreglo
  /*   let arregloAlReverso = arreglo.reverse();//unvertido el arreglo */
    let cadenaInvertida = arreglo.join("");//une los elementos de un arreglo y regresa un string

    /* return console.log(arreglo); */
    return console.log(cadenaInvertida);
};
invertirPalabra("Generetion");
