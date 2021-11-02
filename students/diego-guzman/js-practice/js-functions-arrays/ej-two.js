// Crear una función para ordenar un array de números desordenados de mayor a menor.
const myArray = [2,6,1,6,8,3,4,9,0,1,2,9,6,7,1];

function orderArray (array){
    return array.sort((a,b)=> b-a);
} 

document.write(`<h1>${orderArray(myArray)}</h1>`);
