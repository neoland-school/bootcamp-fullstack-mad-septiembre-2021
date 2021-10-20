const numInput = parseInt(prompt('enter a number'));
const numInput2 = parseInt(prompt('enter another number'));
let sum = 0;
const multiply = (givenNumOne, givenNumTwo)=>{
    for(let i=0; i<givenNumTwo; i++){
        sum+= givenNumOne; 
    }
    return sum
}
document.write(`<h1>${multiply(numInput,numInput2)}</h1>`)