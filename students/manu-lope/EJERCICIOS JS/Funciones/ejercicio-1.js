/* Para ir entrando en materia con funciones:

EJERCICIO 1 : funcion que multiplica dos numeros y muestra el resultado en el navegador.

*/

const USER_INPUT = prompt('Introduce un número');
const USER_INPUT2 = prompt('Introduce otro número');
let n1 = parseInt(USER_INPUT);
let n2 = parseInt(USER_INPUT2);

//------------------------ CLÁSICA---------------//

function multiplica(num1, num2) {
    let valor = num1 * num2;
    return valor;
}

//------------------------ ARROW --------------->

const multiplica = (num1, num2) => { let valor = num1 * num2; return valor; };

document.write(multiplica(n1, n2));

