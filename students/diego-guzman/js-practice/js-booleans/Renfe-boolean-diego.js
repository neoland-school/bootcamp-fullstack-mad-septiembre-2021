let myArray = [];
let count = 0;
for(let i = 0; i<10; i++){
    let userInput = parseInt(prompt('Enter 0 or 1'));
    let isTrue = userInput === 1;
    let isFalse = userInput === 0;
    if(userInput === 1){
    myArray[i] = isTrue; 
    count+=1;
    }
    else{
    myArray[i] = isFalse; 
    }
}

if(count>=8){
    document.write(`<h1>Se están cumpliendo los servicios mínimos</h1>`)
}
else{
    document.write(`<h1>No se están cumpliendo los servicios mínimos</h1>`)
}