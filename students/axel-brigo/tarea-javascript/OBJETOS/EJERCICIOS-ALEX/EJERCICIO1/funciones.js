'use strict';
//1- crear un objeto coche que tenga las siguientes propiedades
//y representa un seat leon(marca, modelo, matricula, numero de ruedas,color, velocidad actual, tiene la ITV pasada?)

let seatLeon = {
    marca: 'Seat',
    modelo: 'Leon',
    matricula: 'ABC123',
    ruedas: 4,
    color: 'red',
    velocidadActual: 125,
    vvt: true
}

//pintar por pantalla si tiene o no la ITV pasada

if (seatLeon.vvt === false) {
    document.write(`la vvt esta mal`)
} else if (seatLeon.vvt === true){
    document.write(`la vvt esta bien`)
}

//añadir al objeto original la posibilidad de acelerar, pasando como entrada la nueva velocidad

seatLeon.velocidadActual = 150;
seatLeon.acelerar = 150;




// llamar al metodo acelerar 
//pintar la nueva velocidad del coche
document.write(seatLeon.acelerar)

