//EJERCICIO 3: funcion que dados dos valores string, se conviertan a booleanos y se devuelva el AND de estos. (Usar el método que enseñó Alex para convertir a booleano un string)

const inputUser1=(prompt('Elige sí or no'));
const inputUser2=(prompt('Elige sí o no'));



let isTrue1 = inputUser1 === 'sí';
let isTrue2 = inputUser2 === 'sí';  //el restultado de esta variable siempre dará como resultado un booleano, si conincide será true y si no coincide será false, de modo que no es necesario traducir o incluir un false. 


//.toLowerCase()==='true/false' lo usamos para convertir a booleano el valor string que introduce el usuario en el prompt.

function funAnd(uno, dos){
    let resultado = uno && dos;
    return resultado;
} 
document.write(funAnd(isTrue1, isTrue2));
