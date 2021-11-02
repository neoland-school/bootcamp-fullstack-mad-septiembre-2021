/*EJERCICIO 2
"Escribir un programa que dadas 2 frases muestre en el navegador la más larga (Easy)"
Vamos a pedir al usuario dos entradas de info tipo string
Tenemos que sacar una variable que sea la longitud de las mismas
Comparamos con un if, if else, y que nos de el resultado según sus valores.
Si las frases miden lo mismo, mostramos las dos con un <p> avisando que son iguales.*/

let userUno = prompt('Introduce una frase');
let userDos = prompt('Introduce otra frase');

if (userUno.length > userDos.length){
         document.write(`<h1>${userUno}</h1>`);
} else if (userUno < userDos) {
    document.write(`<h1>${userDos}</h1>`);
} else if (userUno === userDos) {
    document.write(`<h1>"${userUno}" <p class="p__style">Tiene la misma longitud que</p>"${userDos}"</h1>`)
}