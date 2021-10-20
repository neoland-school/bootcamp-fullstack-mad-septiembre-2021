const NUM = parseInt(prompt ('Escribe un numero'));
let count = '';

function convierte(asterisco){
    for (let i=0; i<asterisco; i++){
        count = count + '*';
    }
    return count;
}

document.write (convierte(NUM));