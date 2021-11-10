// EJERCICIOS ARRAYS MULTIDIMENSIONALES

// EJERCICIO 1 - Crear una función que dado un número y un array de números, te devuelva la posición donde se //// encuentra el número o -1 si no lo encuentra

let num = 3;

let array = [4, 5, 8, 6, 3, 5];

function checkIfExists(number, colection){

return collection.findIndex(e=> e === number);
}

console.log(checkIfExists(num, array));


// EJERCICIO 2 - Crear una función para ordenar un array de números desordenados de mayor a menor.

let array = [4, 2, 5, 1, 3];

array.sort(function(a, b) {

  return a - b;

});
console.log(numbers);


// EJERCICIO 3 - Crear una función que reciba por parámetros 2 array. Esta función devolverá los 2 arrays    // // concatenados y los mostrará en el navegador.

const arrayUno = [1, 2, 3];
const arrayDos = [4, 5, 6];


function listaConcatenada(listUno, listDos){
return arrayUno.concat(arrayDos);
}
console.log(arrayUno.concat(arrayDos));


// EJERCICIO 4 - Crear una función que reciba un array de 10 números y devuelva true si todos son mayor de 10 o // false en caso contrario.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const found = array.find(element => element > 10);

console.log(found);
alert('numeros mayores de 10: true');

const foundDos = array.find(element => element < 10);

console.log(foundDos);
alert('numeros menores de 10: false');


// EJERCICIO 5 - Crear una función que reciba un array de números y devuelva un array con los que son mayores //// que 10.

function mayoresDeDiez(elemento) {
return elemento > 10;

}
let array = [1, 2, 4, 10, 11, 12, 13].filter(mayoresDeDiez);
console.log(array);


// EJERCICIO 6 - Crear una función que reciba un string y devuelva el string en mayusculas.

function func() {
    let str = 'hola';
    let string = str.toUpperCase();
    document.write(string);
}
func();


// EJERCICIO 7 - Crear una función que reciba un string y devuelva los 3 primeros caracteres.

function func() {

let palabraUno = "pizza";
let palabraDos = palabraUno.slice(0, 2);
document.write(palabraDos);
}
func();


// EJERCICIO 8 - Crear una función que reciba un array de strings y devuelva un array con los strings.
             
function capitalize(string) {

return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
capitalize("pizza");
document.write(capitalize("pizza"));


// EJERCICIO 9 - Crear una función que reciba un parámetro de entrada y devuelva true si el parámetro es un ////// array y false si es otro tipo de dato.

let array = [1, 2];

function func(b) {
 
return typeof b === "object";
}
document.write(func(array));


/*EJERCICIO 10 - Crear una función que reciba 2 parámetros: un string y el siguiente array: [ 'c', 'c++', 'python', 'golang', 'solidity', typescript', 'javascript', 'java', 'go', 'pascal', 'scala' ]. La función devolverá true en caso de que el string dado por parámetro exista dentro del array y false en caso contrario.*/

let array = ['c', 'c++', 'python', 'golang', 'solidity', typescript', 'javascript', 'java', 'go', 'pascal', 'scala'];

function (suma){

return;


}
















