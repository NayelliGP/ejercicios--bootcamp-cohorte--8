/* operadores Aritméticos */
// + - / * % ()

let operacion = 3 * 5 + (10 - 5);
console.log(operacion);

let operaciones2 = 3 - 5 / 2 * 4;
console.log(operaciones2);

/* Operadores relacionales */
// <,>,>= ,<=, ==, ===, !=, !==
// bolean true false 

console.log(7 < 7);// no estamos incluyendo el número a comparar
console.log(7 <= 7);// incluyendo el número a comparar

console.log(7 == "7");//compara el valor
console.log(7 === "7");//compara el valor y el tipo de dato

console.log(7 != "7");//
console.log(7 !== "7");//

/* Incremento y decremento */
// +=, -=, *=, /=

let incremento = 5;
incremento +=5; //incremento = incremento(5) + 5
/* incremento = incremento + 5 */
console.log(incremento); //10

incremento -= 5;
/* incremento = incremento - 5 */
console.log(incremento);//5

incremento *= 5;
/* incremento = incremento * 5 */
console.log(incremento);//25

incremento /= 5;
/* incremento = incremento / 5 */
console.log(incremento);//5

/* Operador unario */
// ++, --
//sumar uno, restar 1

let sumar = 0;
console.log(sumar + " línea 49");
sumar++;
console.log(sumar + " línea 51");
sumar++;
console.log(sumar);//2

sumar--;
sumar--;
sumar--;
console.log(sumar);//-1



/*  */
for(let i = 0; i < 10; i++){
    /* código */
};
/* 
++variable = preincrmento 
    Primero modifica el valor y ya despues hace uso de la varible
variable++ = postincremento 
    Usando la variable y despues hace el incremento
    */
let num = 5;
console.log(num++);//5
console.log(num);//6

for(let i = 0; i < 5; i++){
    //iteración
    //primera iteración, se detiene
    console.log("Este es el ciclo padre");
    for(let j = 0; j < 5; j++){
        //hace sus iteraciones (repeticiones) propias
        console.log("Este es el ciclo hijo");
    };
};