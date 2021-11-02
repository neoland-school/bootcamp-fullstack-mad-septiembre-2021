// 2.- Crear una función para ordenar un array de números desordenados de mayor a menor.

let array = [7, 9, 3, 5, 8, 2];
let array1 = [2, 4, 25, 5, 6, 9, 8];
let array2 = [8, 9, 9, 2, 7, 3, 4];

function miFuncion(deMayorAMenor){
    deMayorAMenor.sort((a, b) => b - a);
    return deMayorAMenor;
}

document.write(miFuncion(array));
document.write(miFuncion(array1));
document.write(miFuncion(array2));