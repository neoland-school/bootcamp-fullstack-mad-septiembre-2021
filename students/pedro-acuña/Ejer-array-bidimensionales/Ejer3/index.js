const array2D = [[2,4,5],[4,3,7],[8,3,6]];

function diagonal(array){
    let arrayAux = [];
    let arrayDiag = [];
    for(let i= 0; i<array.length; i++){
        arrayDiag.push(array[i][i]);
            
    }
    return arrayDiag;
}   

document.write(diagonal(array2D));