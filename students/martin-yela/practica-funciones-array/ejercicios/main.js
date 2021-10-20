// ejercicio 1
const array = [3,5,1,6,2,8];
const NUM = parseInt(prompt('Dime un número: '));

function encontrarIndicice(arr, numero){
    return arr.findIndex(v  => v===numero);
}

console.log(encontrarIndicice(array,NUM));

//ejercicio 2
let arrayy = [3,15,2,6,8,];

function mayMen(arr){
return arr.sort((a,b) => b-a);
}

console.log(mayMen(arrayy));

// ejercicio 3
let arrayOne = ['3','8','6'];
let arrayTwo = ['5','4','9'];

function concatenaArr(arr1, arr2){
    return arrayOne.concat(arrayTwo);
}


console.log(concatenaArr(arrayOne,arrayTwo));
document.write(`<h1>${concatenaArr(arrayOne,arrayTwo)}</h1>`);


//ejercicio 4

let arrayyy = [12,22,32,42,52,62,72,82,92,102];

function verificaMAyorTen(arreglo){
    return arreglo.every(v => v>10);
}

console.log(verificaMAyorTen(arrayyy));

//ejercicio 5

let array1 = [2,22,2,42,2,5,7,82,9,102];

function mayorten(arr){
    return arr.filter(v => v>10);
}
console.log(mayorten(array1));

// ejercicio 6

let arrayWords = ['hola', 'adios', 'que tal'];

function aMayuscula(arr){
    return arr.map(v => v.toUpperCase());;
}
console.log(aMayuscula(arrayWords));

// ejercicio 7

let palabra = 'hola que tal';

function tresCharacter(cadena){
    return cadena.substr(0,3);
}
console.log(tresCharacter(palabra));

// ejercicio 8

let lowerWord = ['perro', 'gato', 'tortuga'];

function arrMayus(arr){
    return arr.map((v) => v.charAt(0).toUpperCase() + v.substring(1, v.length));
}

console.log(arrMayus(lowerWord));

// ejercicio 9

let arr = [];

function seeType(valor){
    return (typeof valor === 'object');
} 
console.log(seeType(arr));

console.log(typeof(arr));
// ejercicio NIE de ayer

let numDni = 68549732;
let numDni1 = 4549542;
let Nie = 'X4549542';
let Nie1 = 'Y2569871';
let result;

function trasnformNie(num){
    if (num.charAt(0) === 'X'){
        let result = '0' + num.substr(1, num.length);
      return result;
    }else if (num.charAt(0) === 'Y'){
        let result = '1' + num.substr(1, num.length);
        return result;
    }else if (num.charAt(0) === 'Z'){
        let result = '2' + num.substr(1, num.length);
        return result;
    }else {
        return 0;
    }
}

function esDni(num){
     switch (num%23){
         case 3: {
             result = `El Dni es: ${num+'A'}`;
            break;
         }
         case 4: {
            result = `El Dni es: ${num+'G'}`;
            break;
         }
     }
     return result;
}
document.write(esDni(trasnformNie(Nie1)));

