

const array1 = [29, 38, 39, 29, 15, 13, 29, 15, 13, 16];

function saberSiEsTrue(seraTrue) {
   
    const esMayor = (valor) => valor > 10
    return seraTrue.every(esMayor);
}

document.write(saberSiEsTrue(array1));






