// 11.- Crear una función que reciba el mismo array del ejercicio anterior. Esta función deberá mostrar en el navegador el array tantas veces como elementos contiene (11) y en cada una de ellas eliminará el último elemento: El output visualizado debe ser el siguiente:

// 'c', 'c++', 'python', 'golang', 'solidity', typescript', 'javascript', 'java', 'go', 'pascal'
// 'c', 'c++', 'python', 'golang', 'solidity', typescript', 'javascript', 'java', 'go'
// 'c', 'c++', 'python', 'golang', 'solidity', typescript', 'javascript', 'java'
// .
// .
// .
// 'c', 'c++', 'python'
// 'c', 'c++'
// 'C'

let myArray = ['c', 'c++', 'python', 'golang', 'solidity', 'typescript', 'javascript', 'java', 'go', 'pascal', 'scala'];

function printArray(arr){
    for(let i=arr.length; i>0; i--){
        console.log (arr);
        arr.pop();
    }
}
console.log(printArray(myArray))
