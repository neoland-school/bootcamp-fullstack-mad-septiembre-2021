

let array1 = [1, 18, 58, 120, 300];
let array2 = [20, 38, 68, 130, 50];
let num = 58 ;
let num2 = 130;

function funcion1(ingresarNum , buscaNum) {
    const encontrarNumero = element => element === ingresarNum;
    
    return buscaNum.findIndex(encontrarNumero);
}

document.write(funcion1(num, array1));
document.write(funcion1(num2, array2));