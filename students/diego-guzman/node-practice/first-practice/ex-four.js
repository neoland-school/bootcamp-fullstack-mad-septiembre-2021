
// 4.- Escribir un programa en NodeJs que muestre al usuario por consola un menu de opciones:
// 1:Sumar
// 2:Restar
// 3:Multiplicar
// 4:Dividir
// 0:Salir
// ------------
// Selecciona:
// Cuando el usuario elija una opción se le preguntara:
// "Introduce el primer numero:"
// "Introduce el segundo numero:"
// Acto seguido el programa mostrara el resultado de la operación de forma optima y volverá a mostrar el menu para permitir mas operaciones.
// Si el usuario elige la opción de salir deberemos cerrar el programa.



function printMenu() {
    process.stdout.write('###########################\n');
    process.stdout.write('1-Sumar\n');
    process.stdout.write('2-Restar\n');
    process.stdout.write('3-Multiplicar\n');
    process.stdout.write('4-Dividir\n');
    process.stdout.write('0-Salir\n');
    process.stdout.write('###########################\n');
}


let operation, num_1, num_2;

let state = 'REQUEST_OP';

function requestOp(op) {
    if (op.trim().toLowerCase() !== 'exit') {
        const number = parseInt(op)
        switch (number) {
            case 1: operation = 'add'; break;
            case 2: operation = 'substraction'; break;
            case 3: operation = 'multiplication'; break;
            case 4: operation = 'division'; break;
            case 0: process.exit(); break;
            default: process.stdout.write('opción erronea....\n')
        }
        process.stdout.write('escribe el primer número:')
        state = 'REQUEST_NUM1';
    }
    else {
        process.exit();
    }
}

function requestNum1(op) {
    num_1 = parseInt(op);
    process.stdout.write('escribe el segundo número:');
    state = 'REQUEST_NUM2';
}

function requestNum2(op) {
    num_2 = parseInt(op);
    let result;
    switch (operation) {
        case 'add': result = num_1 + num_2; break;
        case 'substraction': result = num_1 - num_2; break;
        case 'multiplication': result = num_1 * num_2; break;
        case 'division': result = num_1 / num_2; break;
    }
    process.stdout.write(`el resultado es: ${result}\n`)
    state = 'REQUEST_OP';
    printMenu();
}

printMenu();
process.stdin.on('data', chunk => {
    const userData = chunk.toString();
    switch (state) {
        case 'REQUEST_OP': requestOp(userData); break;
        case 'REQUEST_NUM1': requestNum1(userData); break;
        case 'REQUEST_NUM2': requestNum2(userData); break;
    }
});