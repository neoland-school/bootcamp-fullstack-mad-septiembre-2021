
// 12.- Crear una función como la anterior que en lugar de ir eliminando elementos del array vaya generándolos de modo que lo primero que veamos será:

// 'C'
// 'c', 'c++'
// 'c', 'c++', 'python'
// .
// .
// .
// 'c', 'c++', 'python', 'golang', 'solidity', typescript', 'javascript', 'java'
// 'c', 'c++', 'python', 'golang', 'solidity', typescript', 'javascript', 'java', 'go'
// 'c', 'c++', 'python', 'golang', 'solidity', typescript', 'javascript', 'java', 'go', 'pascal'

let myArray = ['c', 'c++', 'python', 'golang', 'solidity', 'typescript', 'javascript', 'java', 'go', 'pascal', 'scala'];
let newArray = [];

function printArray(arr){
    for(let i=0; i<11; i++){
        newArray = arr.splice(i,0,`${myArray[i]}`); 
        console.log (arr);
    }
}
console.log(printArray(newArray));
