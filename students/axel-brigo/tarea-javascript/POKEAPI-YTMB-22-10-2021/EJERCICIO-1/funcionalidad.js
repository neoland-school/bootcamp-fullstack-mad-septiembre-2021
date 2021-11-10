



/*function getPokemon() {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`)
    .then(function (response) {
        response.json()
    .then(function (pokemon) {
        const urlPikachu = pokemon.results[24].url;
        fetch(urlPikachu)
        .then(l)
        
         })
    })
}

getPokemon() */



async function getPokemon(url) {   // creo una funcion asincrona para traer la informacion del pokemon que tiene esa URL  
    const response = await fetch(url);//8 // espero que se cummpla el fetch con la respuesta del servidor
    const data = await response.json();//10 // paso los datos a formato JSON (respuesta del fetch)
    return data //11 // devuelvo la informacion del pokemon ya formateado
}


async function allPokemon() { // la funcion me trae la lista de todos los pokemon 
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150'); //3 // en esta linea se hace un fetch a todos los pokemon
    const data = await response.json();//4 // paso los datos a formato JSon
    return data//5
}

function printPokemon(pokemonInfo) { // funcion normal para imprimir los pokemon
    
    let laImg = document.createElement('img')//13  // creo un tag imagen
    let texto = document.createElement('p')//14 // creo un tag P
    let caja = document.createElement('div') // creo un div

    caja.classList.add('cajita') // le doy clase al div
    texto.classList.add('pokemonName') // le doy clase al P
    laImg.classList.add('imagen') // le doy clase a la img
    
    texto.textContent = pokemonInfo.name  //le agrego al p el nombre del pokemon con .name
    laImg.setAttribute('src', pokemonInfo.sprites.front_default); //  le agrego la imagen a IMG 
    console.log(pokemonInfo.sprites.front_default)

    caja.appendChild(laImg) // meto la IMG adentro del div
    caja.appendChild(texto) // meto el P adentro del div 
    document.body.appendChild(caja)//24 // meto el div adentro del body 
    
}

async function iniciar() {  // creo la funcion que va a tener adentro las demas funciones
    const pokemons = await allPokemon()//2  // la constante pokemons espera que se traigan todos los pokemon
    pokemons.results.forEach(async e => {// 6  // el resultado de todos los pokemon se recorre con un forEach
        
        const pokemon = await getPokemon(e.url)//7 //obtiene el pokemon que hay en e
        printPokemon(pokemon)//12 //pinta el pokemon
    });
    console.log(pokemons)//9
  
}

iniciar()//1 // inicializa la funcion final
















/*async function getPokemon(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const data = await response.json();
    return data
}

async function iniciar() {
    const firstPokemon = await getPokemon(120)
    let laImg = document.getElementById('imagen')
    let texto = document.getElementById('pokemonName')
    let caja = document.getElementById('cajita')
    texto.textContent = firstPokemon.name
    laImg.setAttribute('src', firstPokemon.sprites.front_default);
    console.log(firstPokemon.sprites.front_default)
    caja.appendChild(laImg)
    caja.appendChild(texto)
    document.body.appendChild(caja)
}

iniciar()*/