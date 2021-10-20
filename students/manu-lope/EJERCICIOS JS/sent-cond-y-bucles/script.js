/*EJERCICIO 1
Para hacer que el valor pintado en pantalla sea el mayor podré utilizar condicionales
en este caso vamos a pedir con dos prompt la info al usuario.
Luego, si i1>i2 se mostrará i1, y lo mismo a la invers.
la estructura HTML será un simple <h1></h1>.*/


// let numberOne = prompt('Introduce un número');
// let numberTwo = prompt('Introduce un segundo número');
// let i1 = parseInt(numberOne);
// let i2 = parseInt(numberTwo);

// if (i1 > i2){
//     document.write(`<h1>${i1}</h1>`);
// } else if (i1 < i2) {
//     document.write(`<h1>${i2}</h1>`);
// }

/*EJERCICIO 2
"Escribir un programa que dadas 2 frases muestre en el navegador la más larga (Easy)"
Vamos a pedir al usuario dos entradas de info tipo string
Tenemos que sacar una variable que sea la longitud de las mismas
Comparamos con un if, if else, y que nos de el resultado según sus valores.
Si las frases miden lo mismo, mostramos las dos con un <p> avisando que son iguales.*/

// let userUno = prompt('Introduce una frase');
// let userDos = prompt('Introduce otra frase');

// if (userUno.length > userDos.length){
//          document.write(`<h1>${userUno}</h1>`);
// } else if (userUno < userDos) {
//     document.write(`<h1>${userDos}</h1>`);
// } else if (userUno === userDos) {
//     document.write(`<h1>"${userUno}" <p class="p__style">Tiene la misma longitud que</p>"${userDos}"</h1>`)
// }



/*EJERCICIO 3 - Escribir un programa que recorra los enteros desde 0 hasta una variable 
dada por prompt y vaya mostrando en el navegador si esos son pares o impares. 
Además deberán mostrarse por consola. (Easy)

Lo primero necesitamos que el usuario nos de unn input via prompt
Luego necesitamos que un bucle recorra los números, reconozca el introducido y escriba en pantalla 
si es par o ImageBitmapRenderingContext, esto lo haremos con document.write y luego una declaración dividiendo entre dos 
si da 0 es par, si da 1 es impar.*/

// const userInput = prompt('Introduce un número');
// let userNumber = parseInt(userInput);

// for (let i=0;i<=userNumber;i++) {
//     if (i %2=== 0){
//         console.log(`${i}; es PAR`);
//         document.write(`<p>${i}; es PAR</p>`);
//     }else {
//         console.log(`${i}; es IMPAR`);
//         document.write(`<p>${i}; es IMPAR</p>`);
//     }
// }

/*EJERCICIO 4 - Escribe un programa que recorra los números del 1-100 e imprima por pantalla: (Medium)
        Fizz, si es multiplo de 3
        Buzz, si es múltiplo de 5
        FizzBuzz, si es múltiplo de 3 y 5 a la vez
    Necesito un bucle que primero recorra de 1 a 100 y saque los múltiplos de 3 y 5, que serán un condicional
    con idf y else usando el coeficiente 3%==0 y 5%==0, una vez sepa si es verdadero o no escribirá el correspondiente
    resultado. 
 */


// for (let i=0;i<=100;i++) {
//     if (i %3===0 && i%5===0){
//         document.write(`<p>${i} es FizzBuzz</p>`);
//     }else if (i %3 === 0){
//         document.write(`<p>${i} es Fizz</p>`);
//     }else if (i %5 === 0){
//         document.write(`<p>${i} es Buzz</p>`);
//     }
//     }

/*  EJERCICIO 5
-Escriba por pantalla un programa que pinte el siguiente patrón en la consola del navegador: (Hard)
*  
* *  
* * *  
* * * *  
* * * * *  
* * * *  
* * * 
* *
* 
Necesito que el programa sepa que cuando llegue a 5 empiece a descencer hacia 0. Podría hacer un `for` y decirle
que mientras mi variable sea <=5 dibuje un + y sume uno cada vez i++, y que al llegar a 5 dibuje uno menos i--
*/

let filas;
let asteriscos;
let altura = 4
let conjunto= '';

    for(let filas=0; filas<=altura; filas++) {
        conjunto = conjunto + `<p>`
            for (let asteriscos =1; asteriscos<=filas+1; asteriscos++){
                conjunto = conjunto + '*';
            }
        conjunto = conjunto + `</p>`;
    } 
    console.log(conjunto)
    document.write(conjunto)


/* EJERCICIO 6  
- Ejercicio que calcule el valor de la sucesión de fibonacci de una variable. 
Implementar la solución con un while (Hard)*/

/* EJERCICIO 7
Escribir un programa que solicite al usuario el número de filas y el número de columnas. 
Dibujar una tabla con las filas y columnas introducidas. (Hard)
 */