'use strict';

//2- Crear un objeto que represente un coche y tenga las propiedades marca, modelo, matricula, velocidad actual y algo que me indique si está encendido o apagado

let coche = {
    marca: seat,
    modelo: ibiza,
    matricula: 1111,
    velocidad: 70,
    encendido: true, 
};


// 3- Crear un array de objetos coche


    let coche1 = {
        marca: 'seat',
        modelo: 'ibiza',
        matricula: 1111,
        velocidad: 70,
        encendido: true, 
        };

    let coche2 ={
        marca: 'citroen',
        modelo: 'c4',
        matricula: 2222,
        velocidad: 80,
        encendido: true, 
        };

    let coche3 = {
        marca: 'bmw',
        modelo: 'serie1',
        matricula: 3333,
        velocidad: 90,
        encendido: false,
        };

    let coche4 = {
        marca: 'audi',
        modelo: 'A3',
        matricula: 4444,
        velocidad: 100,
        encendido: true,
    };

let arrayCoches = [coche1, coche2, coche3, coche4];



// 4- Imprimir por pantalla la velocidad del 4º coche

console.log(coche4.velocidad);


// 5- Hacer una funcion que devuelva un array con los coches de una marca que se le pasa por parametro

function arrayCars(buscarMarca) {
    let emptyCars = [];
    for (let i=0; i<arrayCoches.length; i++){
        if (arrayCoches[i].marca === buscarMarca){
        emptyCars.push(arrayCoches[i]);
        }
    };
    return emptyCars;
}

console.log(arrayCars('bmw'));

/* creamos una funcion con un nuevo array, que es el que querremos solicitar, con un valor para buscar la marca. denominamos emptyCars con valor vacío. 
for para que recorra desde 0 pasando por todo el recorrido y lo hga de uno en uno
if condicional para que seleccione el array declarado anteriormente con [i] igualandolo al valor para que encuentre lo que busco
añadimos push a la constante y declaramos como valor el array primero con [i]
el return debe devolver la constante
-para que nos pinte una busqueda pondremos el nombre de la funcion (el nuevo array) con la marca que buscamos.*/



// 6- Hacer una funcion que me indque si hay algun coche encendido

function buscar(on){
    let cocheVacio = [];
    for(let i=0; i<arrayCoches.length; i++){
        if(arrayCoches[i] === on){
            cocheVacio.push(arrayCoches[i]);
        }
    }
    return cocheVacio;
}

console.log(buscar(true));