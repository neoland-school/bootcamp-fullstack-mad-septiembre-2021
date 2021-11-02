'use strict';
let a = 3;
let b = 5;
let objeto = {
    string: 'ey',
    number: 9,
    llueve: true,
    indefinido: undefined,
    array: [2,3,5], 
    nada: null,
    suma: function(a,b){
        a+b;
    },
    mesa: {
        silla: 'madera',
        cubierto: 'plata',
    },
    


};
console.log(objeto);
console.log(objeto.number);
console.log(objeto.string);
console.log(objeto.llueve);
console.log(objeto.nada);
console.log(objeto.indefinido);
console.log(objeto.array);
console.log(objeto.suma);
console.log(objeto.mesa);

delete objeto.mesa;
delete objeto.llueve;
delete objeto.number;
delete objeto.string;
delete objeto.indefinido;
delete objeto.array;
delete objeto.mesa;
delete objeto.suma;
delete objeto.nada;


console.log(objeto);
console.log(objeto.number);
console.log(objeto.string);
console.log(objeto.llueve);
console.log(objeto.nada);
console.log(objeto.indefinido);
console.log(objeto.array);
console.log(objeto.suma);
console.log(objeto.mesa);