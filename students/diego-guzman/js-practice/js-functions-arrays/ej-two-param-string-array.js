// 10.- Crear una función que reciba 2 parámetros: un string y el siguiente array: [ 'c', 'c++', 'python', 'golang', 'solidity', typescript', 'javascript', 'java', 'go', 'pascal', 'scala' ]. La función devolverá true en caso de que el string dado por parámetro exista dentro del array y false en caso contrario.

let myString = prompt('Enter a programming language');
let myArray = ['c', 'c++', 'python', 'golang', 'solidity', 'typescript', 'javascript', 'java', 'go', 'pascal', 'scala'];

function programmingLanguageFinder(param,arr){
    
    return arr.includes(param)
}
console.log(programmingLanguageFinder(myString,myArray));


