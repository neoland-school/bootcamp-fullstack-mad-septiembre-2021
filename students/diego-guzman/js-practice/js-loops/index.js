//Ej. 1
//Escribir un programa que dado dos números muestre en el navegador el mayor de ellos 

let numOne = parseInt(prompt('Enter a number'));
let numTwo = parseInt(prompt('Enter another number'));
let nums = [numOne, numTwo];
if(numOne > numTwo){
    document.write(`<h1>${numOne} is greater </h1>`)
} else if (numOne < numTwo){
    document.write(`<h1>${numTwo} is greater </h1>`)
} else if(numOne===numTwo)
    document.write('<h1>You have input the same number twice</h1>');

// Ej. 2
//Escribir un programa que dadas 2 frases muestre en el navegador la más larga 
let strOne = prompt('Enter a string');
let strTwo = prompt('Enter another string');
let lenghtOne = strOne.length;
let lenghtTwo = strTwo.length;

if(lenghtOne > lenghtTwo){
    document.write(`<h1>${strOne} has more characters</h1>`)
} else if (lenghtOne < lenghtTwo){
    document.write(`<h1>${strTwo} has more characters </h1>`)
} else if(lenghtOne===lenghtTwo)
    document.write('<h1>Both strings have the same length</h1>');

//Ej.3
//Escribir un programa que recorra los enteros desde 0 hasta una variable dada por prompt y vaya mostrando en el navegador si esos son pares o impares. Además deberán mostrarse por consola. 

let numInput = parseInt(prompt('Enter a number'));
for(let i = 0; i <= numInput; i++){
    if(i%2===0){
        document.write(`<h1>${i} is an even number</h1>`);
        console.log(`${i} is an even number`);
    }
    else{
        document.write(`<h1>${i} is an odd number</h1>`);
        console.log(`${i} is an odd number`)
    }
}

//Ej.4
//Escribe un programa que recorra los números del 1-100 e imprima por pantalla: (Medium)
// Fizz, si es multiplo de 3
// Buzz, si es múltiplo de 5
// FizzBuzz, si es múltiplo de 3 y 5 a la vez

for(let i = 1; i <= 100; i++){
    if(i%3===0 && i%5===0){
        document.write(`<p>${i} Fizz Buzz</p>`);
        console.log(`${i} Fizz Buzz`);
    }
    else if(i%3===0){
        document.write(`<p>${i} Fizz</p>`);
        console.log(`${i} Fizz`);
    }
    else if(i%5===0){
        document.write(`<p>${i} Buzz</p>`);
        console.log(`${i} Buzz`);
    }

    else{
        document.write(`<p>${i} is not Fizz nor Buzz</p>`);
        console.log(`${i} is not Fizz nor Buzz`)
    }
}

//Ej.5
// -Escriba por pantalla un programa que pinte el siguiente patrón en la consola del navegador: (Hard)
// *  
// * *  
// * * *  
// * * * *  
// * * * * *  
// * * * *  
// * * * 
// * *
// *
//     OPCIONAL: Dibujar el patrón en el navegador.
let icon = ['*','**','***','****','*****','****','***','**','*'];
for(let i = 0; i<=8; i++){
    document.write(`<p>${icon[i]}`);
};

//Otra opción (Alex)

const userInput = parseInt(prompt('enter a number'));
let icon = '';
for(let i = 0; i<userInput; i++){
    icon+=(`<p>`);
    for(let j = 0; j<=i; j++){
        icon+= '*';
    }
    icon+=(`</p>`);
}
for(let i = userInput-1; i>0; i--){
    icon+=(`<p>`);
    for(let j = i; j>0; j--){
        icon+= '*';
    }
    icon+=(`</p>`);
}
document.write(icon);


// Ejercicio que calcule el valor de la sucesión de fibonacci de una variable. Implementar la solución con un while

const userInput = parseInt(prompt('Enter a number'));
let numOne = 0;
let numTwo = 1;
let nextNum = '';
nextNum = numOne + numTwo;
while(nextNum < userInput){
    console.log(nextNum);
    numOne = numTwo;
    numTwo = nextNum;
    nextNum = numOne + numTwo;
}

//Escribir un programa que solicite al usuario el número de filas y el número de columnas. Dibujar una tabla con las filas y columnas introducidas

const numRows = parseInt(prompt('enter the number or rows'));
const numCol = parseInt(prompt('enter the number or columns'));

let tableRow = document.write(`<tr>`);
for(let i = 0; i<numRows; i++){
    document.write(`<td></td>`);
    for(let j = 0; j<numCol; j++){
    document.write(`<td></td>`);
    }
    tableRow += document.write(`</tr>`);
}
