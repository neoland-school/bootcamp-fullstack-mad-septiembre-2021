'use strict';

let coche1 = {
    marca: 'renault',
    modelo: 'laguna',
    matricula: '2786HNK',
    velocidad_actual: 90,
    motor: true,

};
let coche2 = {
    marca: 'renault',
    modelo: 'megane',
    matricula: '4356INK',
    velocidad_actual: 120,
    motor: true,

};
let coche3 = {
    marca: 'ford',
    modelo: 'fiesta',
    matricula: '7368GTH',
    velocidad_actual: 0,
    motor: false,

};
let coche4 = {
    marca: 'citroen',
    modelo: 'pegaso',
    matricula: '3672UTY',
    velocidad_actual: 100,
    motor: true,

};

let arrayCoches = [coche1, coche2, coche3, coche4];

console.log(arrayCoches[3].velocidad_actual);

const nombre = prompt('Escribe la marca de coches:');
function marca(nombre, arrayCoches) {
    arrayCoches.forEach((v, i, arr) => {
        let newArray = [];
        if (nombre === arr[i].marca) {
            newArray.push(arr[i]);

        }
        return newArray;


    }


    );

}
document.write(marca(nombre, arrayCoches));

function encendido(arrayCoches) {
    let cont = 0;
    for (let i = 0; i < arrayCoches.length; i++) {
        if (arrayCoches[i].motor === true) {
            cont++;
        }

    }
    return cont;
}
document.write(`<p>La cantidad de coches que tienen el motor encendidos son: ${encendido(arrayCoches)}</p>`);

function velocidad_media(arrayCoches){
    let velocidad_total = 0;
    for(let i = 0; i< arrayCoches.length; i++){
        velocidad_total += arrayCoches[i].velocidad_actual;
    }
    return velocidad_total / 4;
}
document.write(`<p> La velocidad media es: ${velocidad_media(arrayCoches)}</p>`);
