// Crear una función que reciba por parámetros 2 array. Esta función devolverá los 2 arrays concatenados y los mostrará en el navegador.

const myArrayOne = ['Diego','Axel','Luci'];
const myArrayTwo = ['Alvaro','Lisel','Martin'];

function concatArray (arrayOne, arrayTwo){
    return arrayOne.concat(arrayTwo);
}
let myConcatArray = concatArray(myArrayOne, myArrayTwo);

document.write(myConcatArray)
