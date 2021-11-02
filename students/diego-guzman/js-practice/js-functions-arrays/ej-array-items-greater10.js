// Crear una función que reciba un array de números y devuelva un array con los que son mayores que 10

myArray = [20,35,1,2,5,6,12,3,56]

function isGreaterThanTen(array){
return array.filter(num=> num>10)
}

document.write(isGreaterThanTen(myArray))