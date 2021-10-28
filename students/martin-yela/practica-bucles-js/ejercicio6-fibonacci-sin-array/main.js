let parar = parseInt(prompt('Dime hasta que número quieres la secuencia: '))

let numberA = 0;
let numberB = 1;
let numberC = 0;
document.write('0-1-');
while (parar > numberC) {
    numberC = numberA + numberB;
    numberA = numberB;
    numberB = numberC;
    document.write(numberC+ '-');
}