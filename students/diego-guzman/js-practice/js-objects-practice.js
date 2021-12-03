'use strict';

// Hello World. Crear un objeto que tenga una propiedad de tipo number.
//       Imprimir solo la propiedad por pantalla 

// let myObject = {
//     num: 14,
// }

// console.log(myObject);

//       Repetir el proceso pero con propiedades que tengan los tipos de datos string, boolean, null, undefined , array, function, objects. Al terminar utilizar el operador "delete" para borrar la propiedad de cada uno de los objetos creados. Mostrar la propiedad y el objeto por pantalla.
// let myObject2 = {
//     str: 'Hello bootcamp',
// }
// delete myObject2.str;
// console.log(myObject2);

// let myObject3 = {
//     arr: ['basketball', 'fishing', 'dog'],
// }
// delete myObject3.arr;
// console.log(myObject3);

// let myObject4 = {
//     bool: false,
// }
// delete myObject4.bool;
// console.log(myObject4);
// let myObject5 = {
//     not: undefined,
// }
// delete myObject5.not;
// console.log(myObject5);

// let myObject6 = {
//     what: null,
// }
// delete myObject6.what;
// console.log(myObject6);

// let myObject7 = {
//     fn: ()=>{document.write(`<h1>Hello There</h1>)`)},
// }
// delete myObject7.fn;
// console.log(myObject7);

//Crear un objeto que represente un coche y tenga las propiedades marca, modelo, matricula, velocidad actual y algo que me indique si está encendido o apagado

// let myCar = {
//     marca: 'mercedes',
//     modelo: 'AMG 45',
//     matricula: '2340HTD',
//     velocidadActual: 200,
//     encendido: false,
// }

// if(myCar.encendido===true){
//     console.log('Está encendido');
// }
// else{
//     console.log('Está apagado');
// }

// Crear un array de objetos coche

let myCar = {
    marca: 'mercedes',
    modelo: 'AMG 45',
    matricula: '2340HTD',
    velocidadActual: 200,
    encendido: false,
}
let myCar_two = {
    marca: 'pagani',
    modelo: 'zonda',
    matricula: '1289ccc',
    velocidadActual: 300,
    encendido: true,
}
let myCar_three = {
    marca: 'lamborgini',
    modelo: 'huracan',
    matricula: '6543aaa',
    velocidadActual: 400,
    encendido: true,
}
let myCar_four = {
    marca: 'ford',
    modelo: 'fiesta',
    matricula: '2742bbb',
    velocidadActual: 120,
    encendido: false,
}
let myCar_five = {
    marca: 'ford',
    modelo: 'fiesta',
    matricula: '2742bbb',
    velocidadActual: 120,
    encendido: false,
}

let myGarage = [myCar, myCar_two, myCar_three, myCar_four, myCar_five];

// console.log(myGarage)

// Imprimir por pantalla la velocidad del 4º coche

// console.log(myGarage[3].velocidadActual)


// * 5- Hacer una funcion que devuelva un array con los coches de una marca que se le pasa por parametro
// let brand = prompt('Enter a brand')

// function checkCar(brand){
//     let pickedCar=[];
//     for(let i=0; i<myGarage.length; i++){
//         if(brand===myGarage[i].marca){
//             pickedCar.push(myGarage[i])
//         }
//     }
//     return pickedCar
// }
// console.log(checkCar(brand))

// 6- Hacer una funcion que me indque si hay algun coche encendido

// function isOn (car){
// let result=car.filter(v=>v.encendido===true);
// if(result.length>0){ //result se refiere al número de objetos de la array
//     return true;
// }
// else{
//     return false;
// }
// }
// console.log(isOn(myGarage))


// 7- Hacer una funcion que me devuelva la velocidad media de todos los coches

let averageSpeed = 0;

function speed(car){
    car.filter(v=> averageSpeed+= v.velocidadActual)
    let result = averageSpeed/car.length;
    return result;
}

console.log(speed(myGarage))

// 8- Escribe una función que dado un array bidimensional, devuelva un array con los valores de la diagonal

