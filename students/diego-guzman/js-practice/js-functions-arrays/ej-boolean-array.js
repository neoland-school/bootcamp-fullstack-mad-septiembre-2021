// Crear una función que reciba un array de 10 números y devuelva true si todos son mayor de 10 o false en caso contrario.

const myArray = [10,2,20,24,1];

const isGreaterThanTen = (num) => num>10;

document.write(myArray.every(isGreaterThanTen))
