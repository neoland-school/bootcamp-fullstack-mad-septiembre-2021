const STRING1 = prompt('Intdroduce la primera frase:');
const STRING2 = prompt('Intdroduce la segunda frase:');

if(STRING1.length > STRING2.length){
    document.write(`La primera frase es más larga con ${STRING1.length} caracteres.`);
}
else if(STRING1.length< STRING2.length){
    document.write(`La segunda frase es más larga con ${STRING2.length} caractares.`);

}
else if(STRING2.length === STRING1.length){
    document.write(`Las dos cadenas tienen la misma longitud.`);
}

