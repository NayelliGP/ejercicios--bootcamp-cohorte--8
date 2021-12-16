/*
Condicionales se utilizan para tomar decisiones dentro de nuestro programa.
    if -si --> si se cumple la condición se ejecuta y si no se ignora

*/

/*
if(condicion){
    codigo
}
*/

// document. write -- imprime directo en el HTML


let edad = parseInt(prompt('Ingresa tu edad:')); 

if(edad >=18 && edad<30){
    document.write ('Eres un joven');
}else if (edad >= 30 && edad < 60 ){
    document.write('Eres un adulto');
}else if (edad >=60){
    document.write('Eres un adulto mayor');
} else if(edad >=120){
    document.write('Error en la edad')
}else{
        document.write ('Eres un niño');
    }
    



