let numberOne = parseInt(prompt('Dime un número: '));
let numberTwo = parseInt(prompt('Dime otro número: '));

function multiplicar(num1, num2) {
    return num1*num2;
}
document.write(`<h1>${numberOne} x ${numberTwo} = ${multiplicar(numberOne, numberTwo)}`);