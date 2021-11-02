let numberOne = parseInt(prompt('Dime un número: '));
let numberTwo = parseInt(prompt('Dime otro número: '));

function multiplicar(num1, num2){
    let multiplicador = num1;
    for (i=0;i<num2-1;i++){
        multiplicador += num1;
    }
    return multiplicador;
}
document.write(`${numberOne} x ${numberTwo} = ${multiplicar(numberOne,numberTwo)}`);