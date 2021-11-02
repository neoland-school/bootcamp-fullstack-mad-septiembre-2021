/*EJERCICIO 3 - Escribir un programa que recorra los enteros desde 0 hasta una variable 
dada por prompt y vaya mostrando en el navegador si esos son pares o impares. 
Además deberán mostrarse por consola. (Easy)

Lo primero necesitamos que el usuario nos de unn input via prompt
Luego necesitamos que un bucle recorra los números, reconozca el introducido y escriba en pantalla 
si es par o ImageBitmapRenderingContext, esto lo haremos con document.write y luego una declaración dividiendo entre dos 
si da 0 es par, si da 1 es impar.*/

const userInput = prompt('Introduce un número');
let userNumber = parseInt(userInput);

for (let i=0;i<=userNumber;i++) {
    if (i %2=== 0){
        console.log(`${i}; es PAR`);
        document.write(`<p>${i}; es PAR</p>`);
    }else {
        console.log(`${i}; es IMPAR`);
        document.write(`<p>${i}; es IMPAR</p>`);
    }
}