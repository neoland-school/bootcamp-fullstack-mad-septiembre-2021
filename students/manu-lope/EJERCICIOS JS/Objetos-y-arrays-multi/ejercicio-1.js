// 1- Hello World. Crear un objeto que tenga una propiedad de tipo number.
//       Imprimir solo la propiedad por pantalla 
//       Imprimir todo el objeto por pantalla
//       Repetir el proceso pero con propiedades que tengan los tipos de datos 
//       string, boolean, null, undefined , array, function, objects. 
//       Al terminar utilizar el operador "delete" para borrar la propiedad de 
//       cada uno de los objetos creados. Mostrar la propiedad y el objeto por consolagi.

let helloWorld = {
    number: 10,
};

document.write(`${helloWorld.number}`);
console.log(helloWorld);

let objetoCompleto = {
    string: 'Hola',
    funciona: true,
    array: [2, 3, 4, 5],
    anidado: {
        stringA: 'anidado',
        valorNum: 27,
    },
    sumar: function (a, b) {
        let suma = a + b;
        return suma
    },
    null: null,
    undef: undefined,
};

console.log(objetoCompleto);
console.log(objetoCompleto.string);
console.log(objetoCompleto.funciona);
console.log(objetoCompleto.array);
console.log(objetoCompleto.anidado);
console.log(objetoCompleto.sumar);
console.log(objetoCompleto.null);
console.log(objetoCompleto.undef);

delete objetoCompleto.string;
delete objetoCompleto.funciona;
delete objetoCompleto.array;
delete objetoCompleto.anidado;
delete objetoCompleto.sumar;
delete objetoCompleto.null;
delete objetoCompleto.undef;

console.log(objetoCompleto);
