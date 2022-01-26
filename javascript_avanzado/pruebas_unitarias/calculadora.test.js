const {sumar, restar, multiplicar, dividir} = require('./calculadora'); //importación

describe('Pruebas en el componente calculadora', () => {

    test('Prueba en la función sumar', () =>{

        expect(sumar(3,5)).toBe(8);
        //espero que cuando se realice la suma de 3 y 5 me de un 8
    });
    
    test('Prueba en la función restar', () =>{

        expect(restar(5,3)).toBe(2);
    });

    test('Prueba en la función multiplicar', () =>{

        expect(multiplicar(5,3)).toBe(15);
    });

    test('Prueba en la función dividir', () =>{

        expect(dividir(8,4)).toBe(2);
    });
});
