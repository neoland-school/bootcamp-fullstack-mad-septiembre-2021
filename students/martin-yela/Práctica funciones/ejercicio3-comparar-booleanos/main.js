let booleanOne = prompt('Di true o false: ').toLowerCase() === 'true';
let booleanTwo = prompt('Di true o false: ').toLowerCase() === 'true';

function comparate(booleanOne, booleanTwo){
    return booleanOne === booleanTwo ? true : false;
}

document.write(`${booleanOne} y ${booleanTwo} es igual a ${comparate(booleanOne,booleanTwo)}`);
console.log(typeof(booleanOne));
console.log(typeof(booleanTwo));



//HACER LA MISMA FUNCIÓN CON ARROWS
// const comparador = (booleanOne, booleanTwo) => {
//     if (booleanOne === booleanTwo){
//         return true;
//     } else {
//         return false;
//     }
// }