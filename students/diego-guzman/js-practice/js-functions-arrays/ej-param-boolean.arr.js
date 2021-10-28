//Crear una función que reciba un parámetro de entrada y devuelva true si el parámetro es un array y false si es otro tipo de dato.

let myArray = [5,3,6,8,3,6,7];
let myString = '22222';

function checkIfArray(param){
    return Array.isArray(param);
}

console.log(checkIfArray(myArray))