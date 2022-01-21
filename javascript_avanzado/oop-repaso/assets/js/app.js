//aplicación basica para un veterinario
class Animalito{
    //constructor (propiedades)
    constructor(nombre, edad, especie, revisado){
        this.nombre = nombre;
        this.edad = edad;
        this.especie = especie;
        this.revisado = revisado; //antes
        this.enfermo = false;
    }

    //metodos
    saludar(){
        return console.log(`Hola mi nombre es ${this.nombre}`)//temple string
    }

}
class Veterinario{
    constructor(){
        this.cantidadPacientes = 0;
        this.pacientesRevisados = 0;
        this.listaPacientes = []; 

    }
    //metodos
    agregarPaciente(paciente){
        this.listaPacientes.push(paciente); //agregar 
         this.cantidadPacientes += 1; //modificar y se le suma 1.
         //this.cantidadPacientes ++; funciona igua +=1
         let mensaje = `Paciente agregado <br>`;
         return document.write(mensaje);

    }
    modificarPacientesRevisados(paci){
        this.pacientesRevisados++
    }

    revisarPaciente(paciente){
        if(paciente.revisado == false){
            paciente.revisado= true;
            //this.pacientesReservados++;
            this.modificarPacientesRevisados();// llamada a otro metodo de esta misma clase
            document.write('<br>Paciente  ha sido revisado');
        }else{
            document.write ('Este paciente ya fue revisado');
        }

    }

    //metodo
    mostrarLista(){
        for(let i=0; i < this.listaPacientes.length; i++ ){
            document.write( " " + this.listaPacientes[i].nombre);
        }
        document.write(`<br> Cantidad de pacientes: ${this.cantidadPacientes} <br> Pacientes revisados: ${this.pacientesRevisados} <br>`)
    }

}
   

//instancia - hacemos una copia de la clase
const VeterinarioPanchito = new Veterinario();


//instanciar
//objetos creados de la clase Animalito
const Animalito1 = new Animalito('Manchas', 5, 'Perro', false); //objeto 1
const Animalito2 = new Animalito('Galleta', 2, 'Gato', true);//objeto 2
console.log(Animalito1);
console.log(Animalito2);

VeterinarioPanchito.agregarPaciente(Animalito1);
VeterinarioPanchito.agregarPaciente(Animalito2);

console.log(VeterinarioPanchito.listaPacientes);

VeterinarioPanchito.mostrarLista();
VeterinarioPanchito.revisarPaciente(Animalito1);
VeterinarioPanchito.mostrarLista();

VeterinarioPanchito.revisarPaciente(Animalito2);

//operador de corto circuito
/* let variable = 0;
console.log */

