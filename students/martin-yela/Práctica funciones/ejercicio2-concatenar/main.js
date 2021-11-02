let input = prompt('Dime una frase: ');

function concatenar(words){
    return 'hola '+words;
}

document.write(`<h1>${concatenar(input)}</h1>`);