let $btnGato = document.querySelector ('#btnGato');

$btnGato.addEventListener('click', () => { //se agrega el evento
         /* 
        resp => resp.json()

        function(resp){
            resp.json()
        }
         */

    //hacer petición
    //resp => resp.json = se ejecuta cuando  obtiene respuesta y necesito que me la proceses en un json, 
    
    //realizamos peticiones que e

    fetch ('https://api.thecatapi.com/v1/images/search')
        .then(resp => resp.json()).then(data =>{
            console.log(data);

            let imagenGatito = document.createElement ('img');
            imagenGatito.src = data[0].url;
            document.body.appendChild(imagenGatito);
        });

        fetch ('https://dog.ceo/api/breeds/image/random')
        .then(resp => resp.json()).then(data =>{
            console.log(data);

            let imagenGatito = document.createElement ('img');
            imagenGatito.src = data.message;
            document.body.appendChild(imagenGatito);
        });

}); 