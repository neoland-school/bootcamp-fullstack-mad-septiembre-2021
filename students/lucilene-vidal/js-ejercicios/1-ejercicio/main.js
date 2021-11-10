
let n1 = prompt("Dime un numero");
let n2 = prompt("Dime otro numero");

console.log(n1);
console.log(n2);


let num1 = parseInt(n1);
let num2 = parseInt(n2);

let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;


document.write('<div><p class= "texto_1"> la suma de ' + num1 + '+' + num2 + '=' +  suma + '</p></div>');
document.write('<div><p class= "texto_2"> la resta de ' + num1 + '-' + num2 + resta + '</p></div>');
document.write('<div><p class= "texto_3"> la multiplicacion de ' + num1 + '*' + num2 + multiplicacion + '</p></div>');
document.write('<div><p class= "texto_4"> la  division de ' + num1 + '/' + num2 + division + '</p></div>');

console.log(typeof suma);
console.log(typeof resta);
console.log(typeof multiplicacion);
console.log(typeof division);







