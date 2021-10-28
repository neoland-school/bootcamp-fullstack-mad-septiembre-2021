let cantidad = parseInt(prompt('¿Cuántos * quieres imprimir?'));

function pintarAsteriscos(num){
    asteriscos ="";
    for (i=0;i<num;i++){
        asteriscos += '*';
    }
    return asteriscos;
}
document.write(`<div>${pintarAsteriscos(cantidad)}</div>`);