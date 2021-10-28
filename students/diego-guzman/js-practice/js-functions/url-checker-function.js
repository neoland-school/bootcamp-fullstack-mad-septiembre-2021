// Crear una función que dado una URL (Se representa con un string) me diga o no si pertenece al dominio de github.

let inputUrl = prompt('Enter an url to be checked');

function belongsToGitHub(str){
return str.includes('https://github.com/')
}

document.write(belongsToGitHub(inputUrl))