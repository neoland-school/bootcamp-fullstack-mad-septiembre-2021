const frase1 = prompt ('Escribe una frase');
const frase2 = prompt ('Escribe otra frase');

if (frase1.length > frase2.length){
    document.write (`<h1>${frase1}</h1>`);
}else if (frase2.length > frase1.length){
    document.write (`<h1>${frase2}</h1>`);
}