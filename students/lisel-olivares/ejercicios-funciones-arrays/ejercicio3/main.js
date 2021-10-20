// 3.- Crear una función que reciba por parámetros 2 array. Esta función devolverá los 2 arrays concatenados y los mostrará en el navegador.

const ARRAY1 = ['Neo', 'land'];
const ARRAY2 = ['Talent','garden'];

function concatenar(word1, word2){
    return ARRAY1.concat(ARRAY2);
}

document.write(concatenar(ARRAY1, ARRAY2));

//la forma de concatenar arrays se muestra con `,` entre los valores