// 4.- Crear una función que reciba un array de 10 números y devuelva true si todos son mayor de 10 o false en caso contrario.

let nums = [2,9,1,8,5,6,1,3,11,10];

function TrueOrFalse(array){
    return array.every((currentValue) => currentValue > 10);
}

document.write(TrueOrFalse(nums));