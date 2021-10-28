//ejercicio 10

let words = 'golang';
let words1 = 'hola';
const ARREGLO = [ 'c', 'c++', 'python', 'golang', 'solidity', 'typescript', 'javascript', 'java', 'go', 'pascal', 'scala' ];

function buscarEnArray(palabra, ARREGLO){
    return ARREGLO.includes(palabra);
}

console.log(buscarEnArray(words, ARREGLO));
console.log(buscarEnArray(words1, ARREGLO));

//ejercicio 11

function delLast(arr){
    let contador = arr;
    for (let i=contador.length;i>0;i--){
        document.write(`<p>${arr}</p>`);
        arr.pop();
    }
}
delLast(ARREGLO);