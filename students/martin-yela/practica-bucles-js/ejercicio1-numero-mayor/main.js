let firstNumber = parseInt(prompt('Dime un número: '));
let secondNumber = parseInt(prompt('Dime un número: '));

if (firstNumber > secondNumber) {
    document.write(firstNumber);
}else if(firstNumber === secondNumber){
    document.write('Son iguales');
} else {
    document.write(secondNumber);
}