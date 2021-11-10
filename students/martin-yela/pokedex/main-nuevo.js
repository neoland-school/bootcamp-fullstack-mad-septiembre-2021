async function getPokemons() {
    const r = await fetch('https://run.mocky.io/v3/ff58d794-e654-434c-914b-d08cb48057eb');
    const d = await r.json();
    return d.results;
}

async function findPokemons(url) {
    const r = await fetch(url);
    const d = await r.json();
    return d;
}


getPokemons().then(element => {
    element.forEach((e) => {
        findPokemons(e.url).then(drawPokemon);
    })
})

function drawPokemon(pokemon) {
    let box = document.createElement('div');
    box.classList.add('cards')
    let image = document.createElement('img');
    let image2 = document.createElement('img');
    let sentence = document.createElement('p');
    image2.classList.add('imageBack');
    image.classList.add('imageFront');
    image.setAttribute('src', pokemon.sprites.front_default);
    image2.setAttribute('src', pokemon.sprites.back_default);
    box.textContent = pokemon.name;
    sentence.textContent = pokemon.id + ' ' + pokemon.types[0].type.name
    document.querySelector('.container').appendChild(box);
    box.appendChild(image);
    box.appendChild(image2);
    box.appendChild(sentence);
}

// - Se añadirá un buscador que cuando el usuario vaya escribiendo el nombre, en la lista solo aparecerán los que contengan el texto buscado en su nombre.

document.getElementById('formul').addEventListener('submit', (e) =>{
    e.preventDefault();
    searchEngine(e.target.findSentence.value);
});

function searchEngine(search){
    getPokemons().then(element => { //ver para recorrer
            if (element.name === search) {
            findPokemons(e.url).then(drawPokemon);
            console.log(e);
            }
        })
}