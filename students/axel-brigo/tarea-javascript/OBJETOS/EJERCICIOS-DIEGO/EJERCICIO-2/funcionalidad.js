'use strict';


let auto = { 
    marca : 'Alex',
    modelo : 31,
    matricula : 'asd123',
    velocidadActual : 120,
    encendido : false,
    };

if (auto.encendido === true) {
        document.write(`el auto esta encendido`)
} else if ( auto.encendido === false){
    document.write(`el auto esta apagado`)
};