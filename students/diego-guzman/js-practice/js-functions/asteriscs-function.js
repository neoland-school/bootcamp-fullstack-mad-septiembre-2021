const numInput = parseInt(prompt('enter a number'));
let count = '';
const asteriscs = numAsteriscs => { 
    for(let i = 0; i<numAsteriscs; i++){
       count += '*';
    }
    return count
 }
 document.write(`<h1>${asteriscs(numInput)}</h1>`)
 