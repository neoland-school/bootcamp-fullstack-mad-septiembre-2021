
//1.- Crear una función que dado un número (introducido por un prompt)y un array de números, te devuelva la posición donde se encuentra el número o -1 si no lo encuentra.


let numUser = prompt('Introduce un valor'); //recogemos el número que nos indica el usuario.
numUser = parseInt(numUser); // Así estamos modificando la variable para convertir su valor string a number
let conjunto = [5, 6, 8, 9, 4]; //aquí definimos el conjunto de números
//ahora definimos la función, la llamamos decirSiexiste, deteminamos que tendrá dos parámetros de entrada; usuario y listado.

function decirSiexiste(usuario, listado) {
    // const condicion = e => e === usuario; esto es igual que poner condicion dentro del paréntesis de findIndex.
    let result = listado.findIndex(e => e === usuario); // le introducimos una variable que será el resultado la comparación, la llamamos result.
    //Usamos un findIndex para que busque en el listado de números y le decimos que se tiene que cumplir que si el valor que vamos a comparar (e) es igual(===) a usuario. Si es igual nos dice la posición comenzndo por el 0, y si no lo es, nos devuelve false expresado como -1.
    return result;
}

document.write(decirSiexiste(numUser, conjunto));

