// 1- crear un objeto coche que tenga las siguientes propiedades y representa un seat leon (marca, modelo, matricula, numero de ruedas, color, velocidad actual, tiene la ITV pasada?)

let coche = {
    marca: 'Seat',
    modelo: 'León',
    matrícula: '1234HTD',
    numeroRuedas: 19,
    color: 'Rojo Burgundi',
    velocidadActual: 140,
    itvPasada: false,
}

// 2- pintar por pantalla si tiene o no la ITV pasada

console.log(coche.itvPasada);

// 3- añadir al objeto original la posibilidad de acelerar, pasando como entrada la nueva velocidad

coche.acelerar = (velocidad) => {coche.velocidadActual = velocidad};

console.log(coche.acelerar(180));
console.log(coche.velocidadActual);