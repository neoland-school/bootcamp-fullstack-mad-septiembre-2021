// Crear una función calculadora que reciba como parametros: Dos operandos y la función que se quiera utilizar para calcular. (Hard)

const numOne = parseInt(prompt('Enter a number'));
const numTwo = parseInt(prompt('Enter another number'));
const sign = prompt('Enter the operation');


let result = 0;

function calculator (inputOne, inputTwo, operator){
    
    if(operator === '+'){
        return result = inputOne + inputTwo;
    }
    if(operator === '-'){
        return result = inputOne - inputTwo;
    }
    if(operator === '*'){
        return result = inputOne * inputTwo;
    }
    if(operator === '/'){
        return result = inputOne / inputTwo;
    }
} 

document.write(calculator(numOne, numTwo, sign))
