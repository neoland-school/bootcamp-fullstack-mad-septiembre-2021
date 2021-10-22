// Ejercicio 1: Recuperar la información de pikachu del API de pokemon y mostrar en la web su imagen frontal y su nombre
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

fetch('https://pokeapi.co/api/v2/pokemon?limit=15000')
    .then(result => result.json())
    .then(data => {
        //console.log(data.results[0].url); // Recorremos array y seleccionamos de que elemento queremos la URL (con el . accedemos a los valores del objeto)
        let arrayPoke = data.results;
        console.log(arrayPoke);
        const pikaPi = arrayPoke.find(element => element.name.toLowerCase() === 'feraligatr');
        console.log(pikaPi);
        // const pikaPiURL = pikaPi.url;
        fetch(pikaPi.url)
            .then(result => result.json())
            .then(data => {
                console.log(data);
                let arrayPikaPi = data.results;
                console.log(arrayPikaPi);
                const sprite = data.sprites.front_default;
                const name = data.name;
                const nameAb = data.abilities[0].ability.name;
                const type = data.types[0].type.name;
                const moves = data.moves[0].move.name;
                const moves2 = data.moves[1].move.name;
                const moves3 = data.moves[2].move.name;
                const moves4 = data.moves[3].move.name;
                console.log(sprite);
                // Los 'p' podrían haber sido una <ul> cambiarlos, y al name ponerle un h1
                let creoContainer = document.createElement('div');
                let creoDiv = document.createElement('div');
                let creoImg = document.createElement('img');
                let creoName = document.createElement('h1');
                let creoType = document.createElement('p');
                let creoAb = document.createElement('p');
                let creoMoves = document.createElement('p');
                let creoMoves2 = document.createElement('p');
                let creoMoves3 = document.createElement('p');
                let creoMoves4 = document.createElement('p');
                creoImg.src = sprite;
                creoName.textContent = name;
                creoType.textContent = (`Type: ${type}`);
                creoAb.textContent = (`Ability: ${nameAb}`);
                creoMoves.textContent = (`Movimientos: ${moves}`);
                creoMoves2.textContent = moves2;
                creoMoves3.textContent = moves3;
                creoMoves4.textContent = moves4;
moves
                document.body.appendChild(creoContainer);
                creoContainer.appendChild(creoDiv)
                creoDiv.appendChild(creoImg);
                creoDiv.appendChild(creoName);
                creoDiv.appendChild(creoType);
                creoDiv.appendChild(creoAb);
                creoDiv.appendChild(creoMoves);
                creoDiv.appendChild(creoMoves2);
                creoDiv.appendChild(creoMoves3);
                creoDiv.appendChild(creoMoves4);
                creoContainer.classList.add('cardContainer__style');
                creoDiv.classList.add('card__style');
                creoName.classList.add('card__style--p');
                creoType.classList.add('card__style--p');
                creoAb.classList.add('card__style--p');
                creoMoves.classList.add('card__style--p');
                creoMoves2.classList.add('card__style--p');
                creoMoves3.classList.add('card__style--p');
                creoMoves4.classList.add('card__style--p');

                
            })
        
    });


