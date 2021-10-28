let numero1 = prompt("ingresa el primer numero");
let numero2 = prompt("ingresa el segundo numero");

let numeroParse1 = parseInt(numero1);
let numeroParse2 = parseInt(numero2);

const multiplicacion = (num1, num2) => {
    let solucion = 0;
    for (let i = 0; i < num2 ; i++) {
        solucion = solucion + num1;
    }
    return solucion
}

document.write(multiplicacion(numeroParse1, numeroParse2));