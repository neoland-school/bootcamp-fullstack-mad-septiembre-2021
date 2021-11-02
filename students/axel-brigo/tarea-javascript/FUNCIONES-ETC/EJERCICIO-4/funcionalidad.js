let asteriscos = prompt("ingresa un número")
let numeros = parseInt(asteriscos);


const imprimir = (numeroDeAsteriscos) => {
    let resultado = ""
    for (let i = 0; i < numeroDeAsteriscos; i++) {
        resultado = resultado + "*"
        
    }
   return resultado
}
let misAsteriscos = imprimir(numeros);
document.write(misAsteriscos);

