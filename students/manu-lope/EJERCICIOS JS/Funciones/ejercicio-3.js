// EJERCICIO 3: Funcion que dados dos booleanos devuelva el AND de estos. 
// (Usar el método que enseñó Alex para convertir a booleano un string)


let inputUno = prompt('true or false');
let inputDos = prompt('true or false');
let trueUno = inputUno.toLowerCase() === 'true';
let falseUno = inputDos.toLowerCase() === 'true';

function calculaAnd(tUno, fUno) {
    return tUno && fUno
}

document.write(calculaAnd(trueUno, falseUno));



