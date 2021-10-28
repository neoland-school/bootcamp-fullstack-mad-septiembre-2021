// Crear una función que reciba un string y devuelva los 3 primeros caracteres

let userString = prompt('enter a string');

function firstCharacters(str){
    return str.slice(0,3)
}

document.write(firstCharacters(userString))