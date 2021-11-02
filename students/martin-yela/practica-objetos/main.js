// 1- crear un objeto coche que tenga las siguientes propiedades y representa un seat leon (marca, modelo, matricula, numero de ruedas, color, velocidad actual, tiene la ITV pasada?)
// 2- pintar por pantalla si tiene o no la ITV pasada
// 3- añadir al objeto original la posibilidad de acelerar, pasando como entrada la nueva velocidad
// 4- llamar al metodo acelerar
// 5- pintar la nueva velocidad del coche

// ejercicio 1

let coche = {
    marca:'seat',
    modelo:'leon',
    matricula:'aaa111',
    numeroRuedas:'4',
    color:'rojo',
    velocidadActual:100,
    itv:true,
}

if (coche.itv) {
    document.write('<h1>Tienes la ITV pasada</h1>');
    
}else {
    document.write('<h1>No tienes la ITV pasada</h1>');
}

document.write(`<p>Velocidad antes: ${coche.velocidadActual}</p>`);
coche.acelerar = (vel) => coche.velocidadActual += vel;

coche.acelerar(20);

document.write(`<p>Velocidad después: ${coche.velocidadActual}</p>`);