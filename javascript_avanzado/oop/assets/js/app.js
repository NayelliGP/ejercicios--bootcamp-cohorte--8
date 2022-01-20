// Clases, molde que nos permite crear objetos

class Animal{ //las clases van en mayuscula la 1ra letra
    //constructor es una función
   /*  nombre = null;
    especie = null; */
    constructor(nombre, especie){
        //console.log('Este es un constructor');
        //this hace referencia al contexto en que se está utilizando
        this.nombre = nombre;
        this.especie = especie;
    }
    //getters y setters
    //solo tiene el proposito de leer o modficar el atributo
    get getNombre(){
        return this.nombre;
    }

    set setNombre(nombre){
        this.nombre = nombre
    }
    get getEspecie(){
        return this.especie;
    }

    set setEspecie(especie){
        this.especie = this.especie
    }



    //metodos == función
    // forEach, reverse
    //manera de crear un metodo
    presentarse(){
        document.write(`Hola soy un ${this.especie} y me lamo ${this.nombre} <br>`);
    }
    cambiarNombre(nuevoNombre){
        this.nombre = nuevoNombre;
        let mensaje = `Mi nuevo nombre es ${this.nombre} y soy un ${this.especie} <br>`
        return  document.write(mensaje);
    }
    //Métodos estáticos
    //Pertenece solo a la clase y no herda a los objetos
    static saludar(){
        return console.log('Hola, soy un método estático')
    }
}

//Animal.presentarse();
//console.log(Animal.getNombre);

Animal.saludar()

//Heredan los atributos y los métdos de la cñase que están utilizando
const Animal1 = new Animal("Scooby", "Perro"); //creamos un objeto
//instanciar = hacer una copia, crear un objeto
console.log(Animal1);

const Animal2 = new Animal("Pecas", "Gato");
console.log(Animal2);

const Animal3 = new Animal();
console.log(Animal3);

//uso del metodo
Animal1.presentarse();
Animal2.presentarse();
Animal3.presentarse();

console.log (Animal1.nombre);
Animal1.nombre = "Scrappy"; //Notación del punto para  cambiar el valor
console.log (Animal1.nombre);
console.log (Animal1);

document.write (Animal1.cambiarNombre("Oddie")); //metodo para cambiar el valolor

//Geters y Setters 
//get = obtiene el valor de un atributo
//set = fijar o cambiar el valor de un Atributo
//se utilizan como si fueran atributos

console.log(Animal1.getNombre);
Animal1.setNombre = "Manchas";
console.log(Animal1.getNombre)
console.log (Animal1);
//Animal1.saludar();


/* function constructor (){

} */