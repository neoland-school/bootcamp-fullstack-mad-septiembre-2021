// 1.- Probar los endpoints que tenemos montados de la mañana para que devuelvan códigos de error.
//  Navegar en el Network de las devtools para localizar y analizar la información de la petición.
// 2.- Crear un endpoint de tipo GET que devuelva la información de los 
// primeros 150 pokemons con la misma estructura que trabajamos ayer.
// 3.- Modificando solo la url a la que hacemos la petición para la pokedex 
// por el nuevo endpoint del ejercicio 2, debemos visualizar los 150 pokemons tal como haciamos ayer. 


const options = {
    method: 'GET',
    body: JSON.stringify({status: 'Encantado con lo que aprendo'})
};

let button = document.createElement('button');
button.textContent = 'Presiona aquí';
document.body.appendChild(button);

button.addEventListener('click', ()=>{ 
    fetch('https://manu-prueba-404.free.beeceptor.com/prueba-put', options)
    .then(r => r.json())
    .then(data => console.log(data) )

});

