/*
coleccion de elementos 
cuentan con metodos yfunciones que nos permiten ordenar  o 
manipular ls datos almacnados
*/


//manera 1
const arreglo1= [4, 'hola', true, [1, 2, 6]] //coleccion de arreglos
console.log(arreglo1);

//maanera 2
const arreglo2= Array.of(1,'Hola', true);
console.log (arreglo2);

//manera 3
const arreglo3 = new Array (3, true, 'Adiós');

//arreglos frutas
const frutas = ['manzana', 'naranjas', 'uvas', 'sandias', 
[1, 2, 3 ,4 ,5, ['A' ,'B' ,'C' ]]]
console.log (arreglo3);
console.log (frutas[1]);
console.log (frutas[3]);
console.log (frutas[4]);
console.log (frutas[4][4]);
console.log (frutas[4][5][1]);
console.log (frutas);
frutas[4][5].push ('D');
console.log(frutas);
//metodos 
// length = longitud
const letras = ['A' , 'B' , 'C' , 'D' ];
console.log(letras. length);

/* push = añade un elemento al final de nuestro arreglo */
letras.push('E');
console.log(letras);

/* pop = Elimina el ultimo elemento en el arreglo */
letras.pop ();
console.log(letras);

/*unshift = agregla un elemento al inicio de el arreglo*/
letras.unshift(1);
console.log(letras);

/*shift = elimina el primer elemento */
letras.shift();
console.log(letras);



/*
nota: no es recomendable utilizar let para los arreglos
let variable1 = 3;
console.log(variable1);
variable1 = 'tres';
console.log(variable1);
*/