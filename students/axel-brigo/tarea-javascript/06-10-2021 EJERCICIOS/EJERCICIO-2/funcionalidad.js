let frase1 = prompt('Ingresa tu frase aqui')
let frase2 = prompt('Ingresa tu frase aqui')


if (frase1.length > frase2.length) {
    document.write(`${frase1} es mas larga que ${frase2}`)
} if (frase2.length > frase1.length)  {
    document.write(`${frase2} es mas larga que ${frase1}`)
} else if (frase1.length === frase2.length) {
    document.write(`${frase1} y ${frase2} son iguales`)
};