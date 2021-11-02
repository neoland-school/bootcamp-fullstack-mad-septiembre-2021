

const addNumber = prompt("ingresa el numero");
let emptyChain = "";

const reverseChain = number => {
    for (let i  = number.length ; i >= 0; i-- ) {
        emptyChain += number.charAt(i);
    }
    return emptyChain

}

document.write(`<h1>${reverseChain(addNumber)}</h1>`);