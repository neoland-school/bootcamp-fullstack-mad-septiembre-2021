const questOne = prompt('Do you like fishing?');
const questTwo = prompt('Do you like basketball?');

let isTrueOne = questOne === 'true';
let isTrueTwo = questTwo === 'true';

const areBothTrue = (inputOne, inputTwo)=>{
    return inputOne && inputTwo;
}
document.write(`<h1>${areBothTrue(isTrueOne,isTrueTwo)}</h1>`)
