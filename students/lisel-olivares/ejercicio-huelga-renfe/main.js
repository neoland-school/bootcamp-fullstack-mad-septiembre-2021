const TRAIN_COUNT = 10; // guardo una variable con los trenes existentes
let trainDeparture = []; // creo la variable donde almaceno si los trenes han salido o no

for (let i = 0; i < TRAIN_COUNT ; i++){ // solicito al usuario que por cada tren me indique si ha salido o no, guardando la informacion en el array
    const userInput = prompt (`¿Ha salido el siguiente tren?`);
    const userInputParsed = userInput.toLowerCase() === 'true';
    trainDeparture[i] = userInputParsed;
}

// Aqui ya tendria un array de booleanos

let trainCountDeparture = 0; // VAriable para saber cuantos trenes han salido

for(let i=0; i<trainDeparture.length; i++){ // Cuento la cntidad de trenes que han salido
    if (trainDeparture[i]){
        trainCountDeparture++;
    }
}

// Aqui ya tengo la cantidad de trenes que hayan salido

const PERCENT_COUNT_NEEDED = Math.ceil(75*TRAIN_COUNT/100); // regla de tres redondeada siempre hacia arriba

const OUTPUT_MINIMUM_SERVICES = trainCountDeparture >= PERCENT_COUNT_NEEDED ? '<h1>Se han cumplido los servicios minimos</h1>' : '<h1 style="color:red">No se han cumplido los revicios minimos</h1>';