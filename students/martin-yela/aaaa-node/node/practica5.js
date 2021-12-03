// 5.- Escribir un programa en NodeJs que muestre por consola lo siguiente:
// 	1:Menu cohete
// 	2:Menu cargas
// 	3:Informacion general
// 	0:Salir

// 	El menu cohete/cargas mostrara:
// 	1: crear cohete/carga
// 	2: borrar cohete/carga
// 	3: Listar cohetes/carga
// 	0: Menu principal.

function menuPrincipal(){
        process.stdout.write('###################################\n');
        process.stdout.write('1:Menu cohete\n');
        process.stdout.write('2:Menu cargas\n');
        process.stdout.write('3:Informacion general\n');
        process.stdout.write('0:Salir\n');
        process.stdout.write('###################################\n');
        let option = inputSelect();
        
        procesarEleccionMenuPrincipal(option);
}

function menuCohete(){
    process.stdout.write('###################################\n');
    process.stdout.write('1:Crear cohete\n');
    process.stdout.write('2:Borrar cohete\n');
    process.stdout.write('3:Listar cohetes\n');
    process.stdout.write('0:Menú principal\n');
    process.stdout.write('###################################\n');
    option = inputSelect();
}
function menuCargas(){
    process.stdout.write('###################################\n');
    process.stdout.write('1:Crear carga\n');
    process.stdout.write('2:Borrar carga\n');
    process.stdout.write('3:Listar carga\n');
    process.stdout.write('0:Menú principal\n');
    process.stdout.write('###################################\n');
    option = inputSelect();
}

// 	Al crear cohete debemos solicitar al usuario nombre y cargaMaxima y guardaremos la información del cohete creando un campo por defecto inicializado a 0 que represente la "cargaActual"

async function inputSelect(){
    let num;
    await process.stdout.write('Elija una opcion: \n');
    process.stdin.on('data', chunk => {
            num = parseInt(chunk.toString())
    })
    return num;
}
function inputInf(){
    let text;
    process.stdin.on('data', chunk => {
            text = chunk.toString();
    })
    return text;
}

function procesarEleccionMenuPrincipal(option) {
    switch (option) {
        case 1: menuCohete();
                break;
        case 2: menuCargas();
                break;
        case 3: process.stdout.write('Has entrado en información general \n');
                break;
        case 0: process.exit()
                break;
        default: process.stdout.write('No se porq no va esta mierda \n');
    }
}

menuPrincipal();