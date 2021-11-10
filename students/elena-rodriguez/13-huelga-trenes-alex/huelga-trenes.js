
/* Los trabajadores de Renfe han decidido ir a la huelga, pero ofrecen un 75% de servicios mínimos a sus viajeros en horas puntas. Debemos construir un programa que nos indique si se están cumpliendo los servicios mínimos. Para ello solicitaremos al usuario 10 booleanos que almacenaremos en un array. Estos booleanos representan si el tren ha salido o no de la estación. Escribir en el DOM un H1 "si se están cumpliendo los servicios mínimos" o un H1 en rojo "No se están cumpliendo".

EJ: [true, true, false, true, true, false, true, true, true, true] -> Si se están cumpliendo
EJ: [true, true, false, true, true, false, true, true, false, true] -> No se están cumpliendo

Para convertir un string a boolean podéis usar el operador de igualdad (let isTrue = myValue.toLowerCase() === 'true';)

*/

const TRAIN_COUNT = 10; // guardo una variable con los trenes existentes
const trainDeparture = []; // creo la variable donde almaceno si los trenes han salido o no

for(let i=0; i<TRAIN_COUNT; i++){ // solicito al usuario que por cada tren me indique si ha salido o no, guardando la información en el array
    const USER_INPUT = prompt('Ha salido el siguiente tren? (true/false)');
    const USER_INPUT_PARSED = USER_INPUT.toLowerCase() === 'true';
    trainDeparture[i] = USER_INPUT_PARSED;
}

// aqui ya tendría un array de booleanos

let trainCountDeparture = 0; // variable para saber cuantos trenes han salido

for(let i=0; i<trainDeparture.length; i++){ // cuento la cantidad de trenes que han salido
    if(trainDeparture[i]){
        trainCountDeparture++;
    }
}

// aqui ya tengo la cantidad de trenes que hayan salido

const PERCENT_COUNT_NEEDED = Math.ceil(75*TRAIN_COUNT/100); // regla de tres redondeada siempre hacia arriba

const OUTPUT_MINIMUN_SERVICES = trainCountDeparture >= PERCENT_COUNT_NEEDED ? '<h1>Se han cumplido los servicios minimos</h1>' : '<h1 style="color:red">No se han cumplido los servicios minimos</h1>';

document.write(OUTPUT_MINIMUN_SERVICES);



// VERSIÓN SIN ARRAYS, SOLO CON BUCLES

const TRAIN_COUNT = 10; // guardo una variable con los trenes existentes

let trainCountDeparture = 0; // variable para saber cuantos trenes han salido
for(let i=0; i<TRAIN_COUNT; i++){ // solicito al usuario que por cada tren me indique si ha salido o no, actualizando el contador de los que han salido
    const USER_INPUT = prompt('Ha salido el siguiente tren? (true/false)');
    const USER_INPUT_PARSED = USER_INPUT.toLowerCase() === 'true';
    if(USER_INPUT_PARSED[i]){
        trainCountDeparture++;
    }
}

// aqui ya tengo la cantidad de trenes que hayan salido

const PERCENT_COUNT_NEEDED = Math.ceil(75*TRAIN_COUNT/100); // regla de tres redondeada siempre hacia arriba

const OUTPUT_MINIMUN_SERVICES = trainCountDeparture >= PERCENT_COUNT_NEEDED ? '<h1>Se han cumplido los servicios minimos</h1>' : '<h1 style="color:red">No se han cumplido los servicios minimos</h1>';

document.write(OUTPUT_MINIMUN_SERVICES);