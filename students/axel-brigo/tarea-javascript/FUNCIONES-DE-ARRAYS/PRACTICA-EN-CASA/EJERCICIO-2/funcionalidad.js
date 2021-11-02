let array1 = [10, 9, 2, 3, 415, 52, 13, 21];

function revertir(array1) {
    return array1.sort ((a, b) => (b - a))
}

document.write(revertir(array1));