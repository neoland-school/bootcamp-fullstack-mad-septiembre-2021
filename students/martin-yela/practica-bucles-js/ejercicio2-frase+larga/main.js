const FRASE_ONE = prompt('Dime una frase: ');
const FRASE_TWO = prompt('Dime otra frase: ');


if (FRASE_ONE === null || FRASE_TWO === null){
    document.write('No has puesto una frase');
} else if (FRASE_ONE.length > FRASE_TWO.length) {
    document.write(FRASE_ONE);
}else if (FRASE_ONE.length < FRASE_TWO.length) {
    document.write(FRASE_TWO);
} else {
    document.write(`La frase "${FRASE_ONE}" y la frase "${FRASE_TWO}" son del mismo tamaño`);
}