/*EJERCICIO 4 - Escribe un programa que recorra los números del 1-100 e imprima por pantalla: (Medium)
        Fizz, si es multiplo de 3
        Buzz, si es múltiplo de 5
        FizzBuzz, si es múltiplo de 3 y 5 a la vez
    Necesito un bucle que primero recorra de 1 a 100 y saque los múltiplos de 3 y 5, que serán un condicional
    con idf y else usando el coeficiente 3%==0 y 5%==0, una vez sepa si es verdadero o no escribirá el correspondiente
    resultado. 
 */


for (let i=0;i<=100;i++) {
    if (i %3===0 && i%5===0){
        document.write(`<p>${i} es FizzBuzz</p>`);
    }else if (i %3 === 0){
        document.write(`<p>${i} es Fizz</p>`);
    }else if (i %5 === 0){
        document.write(`<p>${i} es Buzz</p>`);
    }
    }