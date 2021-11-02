'use strict';

//1- Hello World. Crear un objeto que tenga una propiedad de tipo number.
// Imprimir solo la propiedad por pantalla 
// Imprimir todo el objeto por pantalla
// Repetir el proceso pero con propiedades que tengan los tipos de datos string, boolean, null, undefined , array, function, objects. Al terminar utilizar el operador "delete" para borrar la propiedad de cada uno de los objetos creados. Mostrar la propiedad y el objeto por pantalla.

let firstObject = {
    number:2,
    word: 'hola',
    bool:true,
    arr:[1,2,3],
    nada: null,
    indef:undefined,
    secondObject: {
        name: 'Martín',
        edad: 34,
    },
    correr: function() {
        console.log('Estoy corriendo')
    },

};
console.log(`La propiedad number es ${firstObject.number}`);
console.log(`La propiedad string es ${firstObject.word}`);
console.log(`La propiedad booleana es ${firstObject.bool}`);
console.log(`La propiedad arr es ${firstObject.arr}`);
console.log(`La propiedad nada es ${firstObject.nada}`);
console.log(`La propiedad indef es ${firstObject.indef}`);
console.log(`La propiedad secondObjet es ${JSON.stringify(firstObject.secondObject)}`);
console.log(firstObject.correr());

console.log(firstObject);

delete firstObject.number;
delete firstObject.word;
delete firstObject.bool;
delete firstObject.arr;
delete firstObject.nada;
delete firstObject.indef;
delete firstObject.number;
delete firstObject.secondObject;

console.log(`La propiedad number es ${firstObject.number}`);
console.log(`La propiedad string es ${firstObject.word}`);
console.log(`La propiedad booleana es ${firstObject.bool}`);
console.log(`La propiedad arr es ${firstObject.arr}`);
console.log(`La propiedad nada es ${firstObject.nada}`);
console.log(`La propiedad indef es ${firstObject.indef}`);
console.log(`La propiedad secondObjet es ${JSON.stringify(firstObject.secondObject)}`);

console.log(firstObject);