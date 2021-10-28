// * 2- Crear un objeto que represente un coche y tenga las propiedades marca, modelo, matricula, velocidad actual y algo que me indique si está encendido o apagado
// Los siguientes ejercicios dependen del anterior por lo que los haremos seguidos en el mismo documento:
//  * 3- Crear un array de objetos coche
//  * 4- Imprimir por pantalla la velocidad del 4º coche
//  * 5- Hacer una funcion que devuelva un array con los coches de una marca que se le pasa por parametro
//  * 6- Hacer una funcion que me indque si hay algun coche encendido
//  * 7- Hacer una funcion que me devuelva la velocidad media de todos los coches
//  * 8- Escribe una función que dado un array bidimensional, devuelva un array con los valores de la diagonal


let coche = {
    marca: 'wolswagen',
    modelo: 'polo',
    matricula: 'aaa111',
    velocidadActual: 100,
    on: true,
};

if (coche.on) {
    console.log('Está encendido');
}else{
    console.log('Está apagado');
}

// EJERCICIO 3

let coche1 = {
    marca: 'fiat',
    modelo: 'punto',
    matricula: 'bbb222',
    velocidadActual: 83,
    on: false,
};
let coche2 = {
    marca: 'fiat',
    modelo: 'panda',
    matricula: 'ccc333',
    velocidadActual: 90,
    on: false,
};
let coche3 = {
    marca: 'citroen',
    modelo: 'C4',
    matricula: 'ddd444',
    velocidadActual: 75,
    on: false,
};

let arrCoches = [coche, coche1, coche2, coche3];

// ejercicio 4

document.write(`El coche 4  va a ${coche3.velocidadActual} km/h`);

//ejercicio 5

function buscarMarca(arr, marca){
    return arr.filter(v => v.marca === marca);
}

let respuesta = buscarMarca(arrCoches, 'fiat');
respuesta.forEach(v => document.write(`<h1>${v.modelo}</h1>`));

// ejercicio 6

function isOn(arr){
    return arr.filter(v => v.on === true)
}
isOn(arrCoches).forEach(v => document.write(`${v.modelo} está encendido`));

// ejercicio 7

function velocMedia(arr){
    let suma = 0;
    arr.forEach(v => suma += v.velocidadActual);
    let media = suma/arr.length;
    return media
}

document.write(`<p>La velocidad media es de ${velocMedia(arrCoches)}<p>`);
console.log(velocMedia(arrCoches));

// ejercicio 8

let arraBi = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]];

for (let i=0;i<arraBi.length;i++){
    document.write(arraBi[i][i] + '  ');
}