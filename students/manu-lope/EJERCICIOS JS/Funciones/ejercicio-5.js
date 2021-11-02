// EJERCICIO 5: funcion que multiplique dos numeros sin usar el operador * 
// Necesito que el usuario me de una primera variable y luego sumarla n veces, siendo n la segunda variable 
//que me va a dar el usuario.
//Voy a utilizar un for


let iUno = prompt('numero');
let iDos = prompt('numero');
let toNumber = parseInt(iUno);
let toNumber2 = parseInt(iDos);

function multiplica(nUno, nDos) {
    let result = 0;
    for (let i = 1; i <= nDos; i++)
        result += nUno;
    return result;
}

document.write(multiplica(toNumber, toNumber2));

