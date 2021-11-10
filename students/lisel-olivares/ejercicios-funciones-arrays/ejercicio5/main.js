// 5.- Crear una función que reciba un array de números y devuelva un array con los que son mayores que 10

function devolver(mayores){
    return mayores > 10;
}
let array = [8,7,24,80,45,2,6,11].filter(devolver);

document.write(array);