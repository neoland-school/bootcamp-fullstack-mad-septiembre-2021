//EJERCICIO 2: funcion que concatena "Hola" a un string de entrada por prompt. Se mostrará en el navegador


const inputUser = prompt('Escribe tu nombre de usuario')
const hello = 'hola'

function saludo(hello, username) {
    let result_ = hello + username;
    return result_;
}
document.write(saludo('hola ', inputUser));
