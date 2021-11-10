let semaforo = prompt("elige: rojo o verde");

let colorRojo = 'rojo';
let colorVerde = 'verde';


if (semaforo === 'rojo'){
    document.write(`<div class="contenedorRojo"><h1>DEBE PARAR</h1></div>`);
}else if  (semaforo === 'verde') {
    document.write(`<div class="contenedorVerde"><h1>PUEDE CONTINUAR</h1></div>`);
} else {
    document.write(`<div class="contenedorEstropeado"><img src="stop.png"><h1>EL SEMAFORO ESTÁ ESTROPEADO. PASE BAJO SU PROPIA RESPONSABILIDAD</h1></div>`);
}


