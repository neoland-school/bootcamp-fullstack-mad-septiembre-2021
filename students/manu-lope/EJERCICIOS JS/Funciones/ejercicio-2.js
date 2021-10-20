//EJERCICIO 2: funcion que concatena "Hola" a un string de entrada por prompt. 
//Se mostrará en el navegador

// Tengo que sumarle lo que me diga el usuario al string hola, al ser los dos datos del mismo tipo no
//hará falta parsear y hacemos suma simple. 


const INPUT_TXT = prompt('Introduce tu nombre')

const FRASE_GENERADA = a => { let frase = 'Hola ' + INPUT_TXT + ', máquina, fiera, titán.'; return frase; }

document.write(FRASE_GENERADA());

