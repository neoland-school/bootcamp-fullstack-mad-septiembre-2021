// EJERCICIO 1

for(let i=1; i<=100; i=i+1){ 

document.write(`<h1> Vuelta numero ${i}</h1>`);

}


// EJERCICIO 2

for(let i=1; i<=100; i=i+2){ 

document.write(`<h1> Vuelta numero ${i}</h1>`);

}



// EJERCICIO 3

for(let i=1; i<=987; i=i+2){ 

document.write(`<h1> Vuelta numero ${i}</h1>`);

}



// EJERICIO 4 

/**
* 1. Solicitar al usuario una frase. Esto se hace con prompt
* 2. Recorrer en el bucle la frase hasta su longitud, obteniendo en cada vuelta el caracter i
* 3. Enviar los elementos generados al HTML
* Ejemplo para cuando el usuario mete `hola`
* ´
* <ul>
* <li>h</li>
* <li>o</li>
* <li>l</li>
* <li>a</li>
* </ul>
*
*/ 

let listHTML = `<ul>`; // Tengo una variable donde voy generando el HTML final. La inicializamos con la apertura de la lista
const sentence = promp('Introduzca una frase');// Le pido al usuario que me indique una frase

if(sentence !== null){
for(let i=0; i<sentence.length; i++){ // Recorro de uno en uno los caracteres de la frase

listHTML = listHTML + `<li>${sentence.charAt(i)</li>`;
    }

}

listHMTL += `</ul>`; // cerramos la lista
document.write(listHTML); //mandamos al HTML pintar la lista 
