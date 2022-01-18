
const powerExp = process.argv[2] ?? 1; 

function printMenu(){
    process.stdout.write('###########################\n');
    process.stdout.write('1-Sumar\n');
    process.stdout.write('2-Restar\n');
    process.stdout.write('3-Exponente\n');
    process.stdout.write('4-Salir\n');
    process.stdout.write('###########################\n');
}
let operation, oper_1, oper_2;
let state= 'REQUEST_OP'; // Necesito otros estados 'REQUEST_OPERAND_ONE' 'REQUEST_OPERAND_TWO'

function requestOP(op) {
    if(op.trim().toLowerCase() !== 'exit'){
        const number = parseInt(op);
        switch(number){
            case 1: operation='add'; break;
            case 2: operation='substract'; break;
            case 3: operation='power'; break;
            case 4: process.exit(); break;
            default: process.stdout.write('opción erronea....\n')
        }
        process.stdout.write('Escribe el operando 1:');
        state='REQUEST_OPERAND_ONE';
    }else{
        process.exit();
    }
}

function requestOP_1(op){
    oper_1 = parseInt(op);
    process.stdout.write('Escribe el operando 2:');
    state='REQUEST_OPERAND_TWO';
}

function requestOP_2(op){
    oper_2 = parseInt(op);
    let result;
    switch(operation){
        case 'add': result= oper_1+oper_2; break;
        case 'substract': result= oper_1-oper_2; break;
        case 'power': result= oper_1**oper_2; break;
    }
    process.stdout.write(`El resultado es: ${result}\n`);
    state='REQUEST_OP';
    printMenu();
}

printMenu();
process.stdin.on('data', chunk => {
    const userData = chunk.toString();
    switch(state){
        case 'REQUEST_OP': requestOP(userData); break;
        case 'REQUEST_OPERAND_ONE': requestOP_1(userData); break;
        case 'REQUEST_OPERAND_TWO': requestOP_2(userData); break;
    }
});

process.on('exit', () => console.log('FINALIZANDOOOOOOOOOOOOOOOOOOOOOOOO'));

process.on('SIGINT', () => {
    console.log('ME quieren matar con ctrl+c nooooooo');
    process.exit();
});