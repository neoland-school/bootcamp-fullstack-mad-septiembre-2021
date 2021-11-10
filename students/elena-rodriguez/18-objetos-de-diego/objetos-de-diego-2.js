// * 2- Crear un objeto que represente un coche y tenga las propiedades marca, modelo, matricula, velocidad actual y algo que me indique si está encendido o apagado

const cocheUno = {
    marca: 'Seat',
    modelo: 'Ibiza',
    matricula: '2658CBD',
    velocidadActual: 70,
    encendido: true,
}


//Los siguientes ejercicios dependen del anterior por lo que los haremos seguidos en el mismo documento:

//Para acceder a los valores de un objeto usamos el punto, para usar los valores de un array accedemos mediante corchetes y usando el índice. Primero le diremos al a
// * 3- Crear un array de objetos coche
const cocheDos = {
    marca: 'Seat',
    modelo: 'Córdoba',
    matricula: '5818CBD',
    velocidadActual: 90,
    encendido: false,
}
const cocheTres = {
    marca: 'Renault',
    modelo: 'Megane',
    matricula: '2367ABD',
    velocidadActual: 100,
    encendido: true,
}

const cocheCuatro = {
    marca: 'Renault',
    modelo: 'Clio',
    matricula: '2934AMC',
    velocidadActual: 120,
    encendido: false,
}
let coches = [cocheUno, cocheDos, cocheTres, cocheCuatro];

// * 4- Imprimir por pantalla la velocidad del 4º coche

console.log(coches[3].velocidadActual); //esto retorna 120

//primero le decimos que del array coches, el que está en 3º posición comenzando por 0, 
// nos diga su velocidad actual, para ello lo indicamos con un punto




// * 5- Hacer una funcion que devuelva un array con los coches de una marca que se le pasa por parámetro

let input = 'Seat';  //le indicamos que el parámetro es Seat
function marcaCoches (input) { //creamos una función que recorra todos los coches y  sus marcas para decirnos cuáles son seat, o cuáles son el input que se le haya metido
    let cochesDeLaMarca = [];
    for(let i = 0; i< coches.length; i++) { //Le decimos que empiece en 0; y la condición es que en cada vuelta a lo largo del array coches de la línea 38,
        if (input === coches [i].marca) {  //La variable i recorre el valor, indica las vueltas que vamos a dar en el array.
            cochesDeLaMarca.push(coches[i]);
        } 
    }    
    return cochesDeLaMarca
}
console.log(marcaCoches(input)); 

// * 6- Hacer una funcion que me indque si hay algun coche encendido. Será una función sin parámetros de entrada, que nos devuelve true si hay alguno y false si no los hay

function conexionCoches () {
    for(let i = 0; i = coches.length; i++) {
        if (coches[i].encendido === true) {
            return true
        }
    }
    return false
}
console.log(conexionCoches())
//
// * 7- Hacer una funcion que me devuelva la velocidad media de todos los coches
//Primero tendremos que crear una variable incicializatoria que comience valiendo 0. Que será la sumatoria.

function velocidadMedia() {
    let velocidadSumatoria = 0; //Con esto le decimos que comience valiendo 0.
    for (let i = 0; i < coches.length; i++) {

    }
    return
}

//
// * 8- Escribe una función que dado un array bidimensional, devuelva un array con los valores de la diagonal

//1- Escribe una función que dado un string con una hora (EJ: 14:36:57) devuelva un objeto con las 
//         propiedades de hora, minutos y segundos del string
// 2- Escribe una función que dado un objeto y un string que representa el nombre de la propiedad de ese objeto, 
//         devuelva el valor de esa propiedad
// 3- Escribe una función que dado un objeto y un string que representa el nombre de la propiedad de ese objeto, 
//         elimine esa propiedad del objeto
// 4- Escribe una función que imprima por pantalla el `nombre:valor` de cada propiedad de un objeto 
//          encapsulando cada propiedad por ()
// 5- Escribe una función que dado un array de objetos "producto", que contiene (id, nombre, tipo y precio), 
//         devuelva el precio total de todos los productos
// 6- Escribe una función que dado un array de objetos "producto", que contiene (id, nombre, tipo y precio), 
//         devuelva cuantos tipos de producto existen