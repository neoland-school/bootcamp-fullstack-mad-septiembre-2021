/* Para ir entrando en materia con funciones:

EJERCICIO 1 : funcion que multiplica dos numeros y muestra el resultado en el navegador.
*/
let input1 = prompt('Introduce un valor');
let input2 = prompt('Introduce otro valor');
const n1 = parseInt(input1);
const n2 = parseInt(input2);


function calculadora(numA, numB) { //no se indica n1 y n2 porque estos valores se introducirán cuando se llame a la función en la línea 16
    let result = numA*numB;
    return result;

}
document.write(calculadora(n1, n2));











