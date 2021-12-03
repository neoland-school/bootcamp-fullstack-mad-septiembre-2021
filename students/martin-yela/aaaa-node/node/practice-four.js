// 4.- Escribir un programa en NodeJs que muestre al usuario por consola un menu de opciones:
// 	1:Sumar
// 	2:Restar
// 	3:Multiplicar
// 	4:Dividir
// 	0:Salir
// 	------------
// 	Selecciona:
// Cuando el usuario elija una opción se le preguntara:
// 	"Introduce el primer numero:"
// 	"Introduce el segundo numero:"
// Acto seguido el programa mostrara el resultado de la operación de forma optima y volverá a mostrar el menu para permitir mas operaciones.
// Si el usuario elige la opción de salir deberemos cerrar el programa.

function printMenu(){
    process.stdout.write('-------------------\n' )
    process.stdout.write('1:Sumar\n')
    process.stdout.write('2:Restar\n')
    process.stdout.write('3:Multiplicar\n')
    process.stdout.write('4:Dividir\n')
    process.stdout.write('0:Salir\n')
    process.stdout.write('-------------------\n\n')
    process.stdout.write('Elige una opcion: \n')
}


let results, num1, num2, option;

let state = 'option';

function eleccion(a){
    a === 0 ? process.exit(): option = a;
    state = 'firstNum';                    
    process.stdout.write('Dime el primer numero: ');
}
function primerNum(a){
        num1 = a;
        state = 'secondNum';
        process.stdout.write('Dime el segundo numero: ');
}   
function secondNum(a){
        num2 = a;
        state = 'option';
        operar();
}   


printMenu();
process.stdin.on('data', chunk => {
    const userData = parseInt(chunk.toString());
    switch(state) {
        case 'option' : eleccion(userData);
                        break;
        case 'firstNum' : primerNum(userData)
                        break;
        case 'secondNum' :  secondNum(userData);
                            break;


    }
    
})

function operar() {
        switch(option){
            case 1: results = num1 + num2;
                break;
            case 2: results = num1 - num2;
                break;
            case 3: results = num1 * num2;
                break;
            case 4: results = num1 / num2;
                break;
            default :   process.stdout.write('La opción elegida es incorrecta');
                        state = 'option';
        }
        process.stdout.write('El resultado es: '+ results + '\n');
        setTimeout(function(){ printMenu(); }, 2000);
        
}
