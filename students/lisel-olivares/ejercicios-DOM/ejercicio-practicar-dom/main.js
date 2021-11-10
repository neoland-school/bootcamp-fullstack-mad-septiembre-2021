//El que lo vea complicado y no quiera terminar el de Alex de esta mañana puede empezar practicando con este:

//HACER HTML VACIO Y DESDE JAVASCRIPT AÑADIR UN DIV.;

const contenedor = document.createElement('div'); // creo el contenedor

// DENTRO DE ESE DIV METER:
// UN P

const texto = document.createElement('p'); // creo el elemento a con `texto`

texto.textContent = "esto es un div"; // inserto el texto en `texto`

contenedor.appendChild(texto); // añado el texto al contenedor




//  UN A que redirija a la doc de javascript (MDN)

const link = document.createElement('a'); // crear un elemento a, 

a.href = "https://developer.mozilla.org/es/docs/Web/JavaScript";// asignar a la variable la prop href=(link)
contenedor.appendChild(link);
    
// inyectar variable al contenedor

document.body.appendChild(contenedor);






// UN UL con 3 elementos li (con texto cada uno)*/