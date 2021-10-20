'use strict';


let auto1 = {
    marca: 'Tesla',
    modelo: 1,
    matricula: 'asd123',
    velocidadActual: 90,
    encendido: false,
};

/*if (auto1.encendido === true) {
        document.write(`el auto esta encendido`)
} else if ( auto1.encendido === false){
    document.write(`el auto esta apagado`)
};*/

let auto2 = {
    marca: 'BMW',
    modelo: 2,
    matricula: '123asd',
    velocidadActual: 170,
    encendido: false,
};

let auto3 = {
    marca: 'Lamborghini',
    modelo: 27,
    matricula: 'a1b2c3',
    velocidadActual: 290,
    encendido: false,
};


let auto4 = {
    marca: 'Ferrari',
    modelo: 29,
    matricula: 'r1t2t3',
    velocidadActual: 320,
    encendido: true,
};

let coches = [auto1, auto2, auto3, auto4];

/* ejercicio 4 
document.write(coches[3].velocidadActual); */

/*ejercicio 5 

function arrayAutos(parametrocar) {
    let cochesVacio = [];
    for (let i = 0; i < coches.length; i++) {
        if (coches[i].marca === parametrocar) {
            cochesVacio.push(coches[i]);
      };
    }
    return cochesVacio;
}

console.log(arrayAutos('Tesla'));*/



/*Ejercicio 6 

function saberToF() {
    for (let i = 0; i < coches.length; i++) {
        if (coches[i].encendido === true) {
            return true
        }

    }
    return false
}

document.write(saberToF(coches))*/



/*Ejercicio 7 */
/*7- Hacer una funcion que me devuelva la velocidad media de todos los coches*/
/*La media se calcula sumando todos los valores y dividiendo la suma entre el número total

function calcularVelocidad(){
let velocidadMedia = 0;
    for (let i = 0; i < coches.length; i++) {
        velocidadMedia += coches[i].velocidadActual;
    }
    let result = velocidadMedia / coches.length;
    return result;
}
console.log(calcularVelocidad());*/


/* * 8- Escribe una función que dado un array bidimensional, devuelva un array con los valores de la diagonal */


/*function bidimensionalArray() {
    let array2D = [
        [2, 4], //fila 0
        [3, 5], //fila 1
    ];


    for (let i = 0; i < array2D.lenght; i++) { 

        for (let j = 0; j < array2D[i].lenght; j++) { // recorro las columnas
            console.log(array2D[i][j]) //obtengo la fila i, la columna j
        }
    }
}*/

let array2D = [
    [3, 4, 5, 7,],
    [6, 8, 4, 2,],
    [1, 4, 3, 2,],
    [6, 8, 4, 3,], 
];

for (let i = 0; i < array2D.length; i++) {
    for (let j = 0; j < array2D[i].length; j++) {
        console.log(array2D[i][j]);
        
    }
    
}
















/*
function saberToF() {

    for (let i = 0; i < coches.length; i++) {
        if (coches[i].encendido === true) {
            return true
        }

    }
        return false
}
let variable1 = saberToF();

console.log(variable1); */