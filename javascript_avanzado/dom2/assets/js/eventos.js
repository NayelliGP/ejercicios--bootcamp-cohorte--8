let $titulo = document.querySelector('#titulo');
let $mensaje = document.querySelector('#mensaje');
let $btnMensaje = document.querySelector('#btnMensaje');
let $spanError = document.querySelector('span');

/* addEventListener agrega uun evento al elemento */
$btnMensaje.addEventListener('click',() => { //función anonima
    console.log('No me presiones');
});

$mensaje.addEventListener('keydown', (e) =>{ //guarda la inforación cuand se presionan las teclas
    //e hace referencia al evento 

    console.log(e.target.value);

    if(e.target.value.length < 3){
        $spanError.classList.remove('hide');
        $spanError.classList.add('error');
    }else{
        $spanError.classList.add('hide');
        $spanError.classList.remove('error');
        
    }


    /* console.log(e); */


   /*  console.log('escribiste algo');*/
});

/* $mensaje.addEventListener('keydown', mostrarConsole);

function mostrarConsole(){
    console.log('escribise algo');
} */