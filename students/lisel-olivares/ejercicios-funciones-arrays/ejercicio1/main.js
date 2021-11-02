// 1.- Crear una función que dado un número y un array de números, te devuelva la posición donde se encuentra el número o -1 si no lo encuentra.

let num = prompt ('Busca el numero');
num = parseInt(num)
let array = [3,6,7,2,9,5];

function miFuncion(number, sucesion){
    return sucesion.findIndex(e => e === number);
}

document.write(miFuncion(num, array));