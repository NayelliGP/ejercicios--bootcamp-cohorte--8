/* 
condicionales
if(condicion){
    bloque
}else if (){

}else{
}
/*

/*
función
bloque de códgo reutilizable

function nombre (parametros){
    return

}
nombre (argumentos);
*/

function procesadorDeFrutas(manzanas, naranjas){
    let jugo = 'Jugo de ' + manzanas + 'mazanas y ' + 
    naranjas + 'naranjas. '; 
    return jugo;
}

let jugoDeManzana = procesadorDeFrutas(4 , 0);
console.log (jugoDeManzana);

let jugoDeNaranja = procesadorDeFrutas(0 ,5 );
console.log (jugoDeNaranja);

