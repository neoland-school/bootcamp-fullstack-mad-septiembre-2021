let usuario = prompt("ingresa un numero");
let usuario2 = prompt("ingresa un numero");

let a = parseInt(usuario);
let b = parseInt(usuario2);

function suma(a, b) {
    let valor = a + b
    return valor
}

document.write(suma(a,b))