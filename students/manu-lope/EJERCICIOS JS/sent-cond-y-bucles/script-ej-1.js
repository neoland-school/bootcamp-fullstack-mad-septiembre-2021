/*EJERCICIO 1
Para hacer que el valor pintado en pantalla sea el mayor podré utilizar condicionales
en este caso vamos a pedir con dos prompt la info al usuario.
Luego, si i1>i2 se mostrará i1, y lo mismo a la invers.
la estructura HTML será un simple <h1></h1>.*/


let numberOne = prompt('Introduce un número');
let numberTwo = prompt('Introduce un segundo número');
let i1 = parseInt(numberOne);
let i2 = parseInt(numberTwo);

if (i1 > i2){
    document.write(`<h1>${i1}</h1>`);
} else if (i1 < i2) {
    document.write(`<h1>${i2}</h1>`);
} else {
    document.write(`<h1>${i2} y ${i1} son el mismo número.</h1>`)
}



/* EJERCICIO 6  
- Ejercicio que calcule el valor de la sucesión de fibonacci de una variable. 
Implementar la solución con un while (Hard)*/

/* EJERCICIO 7
Escribir un programa que solicite al usuario el número de filas y el número de columnas. 
Dibujar una tabla con las filas y columnas introducidas. (Hard)
 */