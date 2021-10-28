//  * 2- Crear un objeto que represente un coche y tenga las propiedades marca, modelo, matricula, 
// velocidad actual y algo que me indique si está encendido o apagado

// Los siguientes ejercicios dependen del anterior por lo que los haremos seguidos en el mismo documento:

//  * 3- Crear un array de objetos coche

//  * 4- Imprimir por pantalla la velocidad del 4º coche

//  * 5- Hacer una funcion que devuelva un array con los coches de una marca que se le pasa por parametro


//  * 6- Hacer una funcion que me indIque si hay algun coche encendido

//  * 7- Hacer una funcion que me devuelva la velocidad media de todos los coches


let cocheUno = {
    marca: 'Renault',
    modelo: 'Scenic',
    matricula: '0000jie',
    velActual: 70,
    encendido: true,
};

let cocheDos = {
    marca: 'Seat',
    modelo: 'León',
    matricula: '0233lll',
    velActual: 0,
    encendido: false,
};

let cocheTres = {
    marca: 'Renault',
    modelo: 'Clio',
    matricula: '9866pae',
    velActual: 120,
    encendido: true,
};

let cocheCuatro = {
    marca: 'Toyota',
    modelo: 'Prius',
    matricula: '5467zzz',
    velActual: 10,
    encendido: true,
};


const coches = [cocheUno, cocheDos, cocheTres, cocheCuatro];

// /* VELOCIDAD DEL 4º COCHE EN CONSOLE */

console.log(coches[3].velActual);


// /* NUEVO ARRAY CON LOS COCHES CON MARCA IGUAL */

let input = 'Renault';
function marcaCoche(input) {
    let nuevoArrayMarca = [];
    for (let i = 0; i < coches.length; i++) { // i empieza en 0, si es menor que la longitud de la array coches, suma 1 y repite bucle
        if (input === coches[i].marca) { // la variable i recorre el array y si input es === que la marca hace un nuevo array con push.
            nuevoArrayMarca.push(coches[i]);  // por eso aquí en el array ponemos i para que pushee los elementos coincidentes con input en una nueva array.
        }
    }
    return nuevoArrayMarca // nos da el nuevo array con el resultado
}

console.log(marcaCoche(input)); //para llamar a la función siempre hace falta poner también sus valores entre ().


// /* INDICAR SI HAY ALGÚN COCHE ENCENDIDO */



function cocheEnMarcha() {
    for (let i = 0; i < coches.length; i++) {
        if (coches[i].encendido === true) {
            return true
        }
    }
    return false
}

console.log(cocheEnMarcha());


/* INDICAR CON UNA FUNCIÓN LA VELOCIDAD MEDIA DE LOS COCHES */

//Necesito dar como valor la velocidad del array coches[].velocidad, sumarla y dividirla por coches[i]
// hacer variable sumatoria, y luego cálculo / (70+10+0+120)/4=50

function speed() {
    let mediumSpeed = 0; // variable sumatoria se inicializa con '0'
    for (let i = 0; i < coches.length; i++) {
        mediumSpeed = coches[i].velActual + mediumSpeed;
    }; 
    return mediumSpeed/coches.length 
}

console.log(speed());