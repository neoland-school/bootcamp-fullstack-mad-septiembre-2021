let array1 = [5, 8, 15, 130, 25];
let numeroMagico = 8;


function funcionPrimera(parametro1, parametro2) {
    
    const buscador = elemento => elemento === parametro1;
    return parametro2.findIndex(buscador);
}

document.write(funcionPrimera(numeroMagico, array1));