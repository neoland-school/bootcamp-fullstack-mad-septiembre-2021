let fibonacci = [0,1];
let numberUsuario = parseInt(prompt('Introduce un número: '));

while (numberUsuario> fibonacci[fibonacci.length-1]){
    fibonacci[fibonacci.length] = fibonacci[fibonacci.length-1] + fibonacci[fibonacci.length-2];
}
document.write(`<p>${fibonacci}<p>`);