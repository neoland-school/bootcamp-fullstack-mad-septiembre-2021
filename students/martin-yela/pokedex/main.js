// jercicio 1: Recuperar la información de pikachu del API de pokemon y mostrar en la web su imagen frontal y su nombre
// Ejercicio 2: Construcción de la aplicación de POKEDEX:
// Vamos a construir una aplicación para mostrar una pokedex (ver imagen de ejemplo de diseño). La pokedex:
//  - Mostrará el listado con los primeros 150 pokemons en orden. Para cada pokemon se mostrará:
//        * Imagen frontal del pokemon
//        * Nombre del pokemon
//        * Tipo del pokemon
//  - Se añadirá un buscador que cuando el usuario vaya escribiendo el nombre, en la lista solo aparecerán los que contengan el texto buscado en su nombre.
//  - (NO ES TRIVIAL) Al hacer click en un pokemon desaparecerá el listado y se mostrará información detallada de ese pokemon (Elegir algunos datos como el ataque)
//  Para obtener los datos utilizaremos el API de https://pokeapi.co/. En concreto necesitaremos obtener datos de las siguientes URL’s:
//  - https://pokeapi.co/api/v2/pokemon?limit=150 => devuelve el listado de los 150 primeros pokemon con su nombre y la URL del API que contiene su información.
//  - Con la URL de cada pokemon obtendremos la información detallada de ese pokemon. Tendremos que utilizar esa URL para obtener esos datos para la pokedex

async function getPokemons(){
    const r = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
    const d = await r.json();
    return d.results;
}


async function findPokemon(pokemons, name){
    const url = pokemons.find(element => element.name.toLowerCase() === name).url;
    const r = await fetch(url);
    const d = await r.json();
    return d;
}


function createPokemonCard(pokemonInfo){
    console.log(pokemonInfo);
    let box = document.querySelector('div');
    let image = document.createElement('img');
    image.setAttribute('src', pokemonInfo.sprites.front_default);
    box.textContent = pokemonInfo.name;
    box.appendChild(image);
}

async function showPikachu(nombre){
    const pokemons = await getPokemons();
    const pikachu  = await findPokemon(pokemons, nombre);
    createPokemonCard(pikachu);
}

showPikachu('pikachu');
