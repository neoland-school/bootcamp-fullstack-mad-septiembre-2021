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