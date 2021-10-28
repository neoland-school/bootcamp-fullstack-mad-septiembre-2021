// ejercicio 1

let number = parseInt(prompt('introduce un numero del 0 al 9'));

function encontrarNumero(num) {
    let arrNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const foundItem = arrNumber.find(v => v === number);

    if (foundItem >= 0) {
        return'estar está';
    } else {
        return 'nosta'
    }
}

document.write(encontrarNumero(number));
document.write(`<p></p>`);

// ejercicio 2

let arrNumber = [0, 1, 2, 4, 8, 5, 2, 7, 8, 9];

function numeroReves(arrayNumero){
    let numReves = arrayNumero.sort((a,b)=>b-a);
    return numReves;
}

 
document.write(numeroReves(arrNumber));
document.write(`<p></p>`);

// ejercicio 3

let array1=[1,2,3,4,5];
let array2=[5,4,3,2,1];

function concatenar(cadena1,cadena2){
    let concatenada= cadena1.concat(cadena2);
    return concatenada;
}

document.write(concatenar(array1,array2));
document.write(`<p></p>`);

 // ejercicio 4
 let arrayMayores=[11,12,24,22,22,22,11,23,44,9];
 function numerosMayores(arrayNumMayores){
     let longitud=[]
     longitud = arrayNumMayores.filter(v=>v>10);
     return longitud.length === arrayNumMayores.length;
     
 }

 document.write(numerosMayores(arrayMayores));
 document.write(`<p></p>`);

// ejercicio 5

let arrayMayores2=[11,2,3,4,7,22,11,23,44,12];

function numerosMayores2(arrayNumMayores){
    let longitud = arrayNumMayores.filter(v=>v>10);
   return longitud;
}

document.write(numerosMayores2(arrayMayores2));
document.write(`<p></p>`);

//ejercicio 6

let stringMinus= prompt('dame cadenita en minusculas');

function mayusculas(cadenaChiquita){
    cadenaChiquita = cadenaChiquita.toUpperCase();
    return cadenaChiquita;
}

document.write(mayusculas(stringMinus));
document.write(`<p></p>`);

// ejercicio 7

let string3Digitos= prompt('te quito los primeros 3 caracteres');

function tresDigitos(cadena){
    cadena=cadena.substring(0,3);
    return cadena;
}

document.write(tresDigitos(string3Digitos));
document.write(`<p></p>`);

// ejercicio 8

let arrayCapi=['hola','toy','capitalizao'];

function capitalizar(arrayCap){
    arrayCap.forEach((v,i,arr) => arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].substring(1,[v.length]));
   
    return arrayCap;
}

document.write(capitalizar(arrayCapi));
document.write(`<p></p>`);

//ejercicio 9

let dataString=[2,3];

function arrayChecker(dato){
    return Array.isArray(dato)
       

   
}

document.write(arrayChecker(dataString));
document.write(`<p></p>`);

//ejercicio 10

let lenguajes=prompt('dime un lenguaje que te mole');
let arrayLenguajes=[ 'c', 'c++', 'python', 'golang', 'solidity', 'typescript', 'javascript', 'java', 'go', 'pascal', 'scala'];

function lenguajesChecker(leng,arrLenguaje){
   return arrLenguaje.includes(leng);
}

document.write(lenguajesChecker(lenguajes,arrayLenguajes));
 document.write(`<p></p>`);

//ejercicio 11

function lenguajeDecay(cadeLeng){
    for(let i=0;i<11;i++){
        cadeLeng.splice(11-i, 1);
        console.log(cadeLeng);
    }
}
lenguajeDecay(arrayLenguajes);

//ejercicio 12
let cadenalengvacia=[];

function lenguajeUnir(cadeLeng2){
    let arrayLenguajes=[ 'c', 'c++', 'python', 'golang', 'solidity', 'typescript', 'javascript', 'java', 'go', 'pascal', 'scala'];

    for( i=0;i<11;i++){
        cadeLeng2.splice(i, 0,arrayLenguajes[i]);
        console.log(cadeLeng2);
    }
}
lenguajeUnir(cadenalengvacia);