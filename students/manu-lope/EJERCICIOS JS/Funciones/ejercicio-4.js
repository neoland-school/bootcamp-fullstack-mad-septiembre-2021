// EJERCICIO 4: funcion que devuelva tantos asteriscos como indique el parametro de entrada. 
// (Sin usar repeat)

let parametroEntrada = prompt('Introduce un número');
let numeroEntrada = parseInt(parametroEntrada);

function asterisco(a1) {
    let dibujo ='';
    for (i=1; i<=a1; i++){
        dibujo = dibujo + '*';
}
    return dibujo;

}

document.write(asterisco(numeroEntrada));
