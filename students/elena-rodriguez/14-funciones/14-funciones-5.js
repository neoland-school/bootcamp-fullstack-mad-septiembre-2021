//EJERCICIO 4: funcion que devuelva tantos asteriscos como indique el parametro de entrada. (Sin usar repeat)

//creamos la variable que nos permite recoger la información que introduce el usuario y después pasamos el valor de string a number 

let inputNumberAsterisco = prompt('Introduce un número del uno al 10');
const primera = parseInt(inputNumberAsterisco);

//creamos la función asteriscos con un único parámetro de entrada, elemento. En la siguiente línea, dentro de la función creamos una variable que recoge 

function asteriscos(elemento) {
    let asterisConcatenado = '';
    for (let i = 1; i <= elemento; i++) {
        // definimos el bucle que comienza en 1, que dejará de ejecutarse hasta que i sea menor o igual que elemento. 
    asterisConcatenado = asterisConcatenado + '*';
    }
    return asterisConcatenado;
}
document.write(asteriscos(primera) );