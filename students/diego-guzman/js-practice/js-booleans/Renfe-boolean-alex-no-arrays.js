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