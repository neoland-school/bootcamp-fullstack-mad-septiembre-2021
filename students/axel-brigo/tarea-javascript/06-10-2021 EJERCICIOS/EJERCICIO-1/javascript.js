let primerNumero = prompt('Ingrese el primer numero');
let segundoNumero = prompt('Ingrese el segundo numero numero');


let primerNumeroParse = parseInt(primerNumero);
let segundoNumeroParse = parseInt(segundoNumero);

if (primerNumeroParse > segundoNumeroParse) {
    document.write(`<div>${primerNumeroParse} es mayor que ${segundoNumeroParse}</div>`)
} if (primerNumeroParse < segundoNumeroParse) {
    document.write(`<div>${segundoNumeroParse} es mayor que ${primerNumeroParse}</div>`)
} else if (primerNumeroParse === segundoNumeroParse) {
    document.write(`<div>${primerNumeroParse} y ${segundoNumeroParse} son iguales</div>`)
} else {

};