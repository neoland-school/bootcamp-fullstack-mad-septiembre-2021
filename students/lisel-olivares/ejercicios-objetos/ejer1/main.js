'use strict';

/* 1- Hello World. Crear un objeto que tenga una propiedad de tipo number.
Imprimir solo la propiedad por pantalla 
Imprimir todo el objeto por pantalla
Repetir el proceso pero con propiedades que tengan los tipos de datos string, boolean, null, undefined , array, function, objects. Al terminar utilizar el operador "delete" para borrar la propiedad de cada uno de los objetos creados. Mostrar la propiedad y el objeto por pantalla.*/


let casa = {
    numero: 50,
    str: 'grande',
    bool: true,
    propiedad: null,
    otraPropiedad: undefined,
    array: [1,2,3],
    años: function(p1,p2) {
        return p1+p2;
        }
    };

console.log(casa.numero);
console.log(casa.grande);
console.log(casa.string);
console.log(casa.bool);
console.log(casa.propiedad);
console.log(casa.otraPropiedad);
console.log(casa.array);
console.log(casa.años);


console.log(delete casa.numero);
console.log(delete casa.grande);
console.log(delete casa.bool);
console.log(delete casa.propiedad);
console.log(delete casa.otraPropiedad);
console.log(delete casa.array);
console.log(delete casa.años);
