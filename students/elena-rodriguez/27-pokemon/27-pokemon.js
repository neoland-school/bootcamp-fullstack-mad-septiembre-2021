// Ejercicio 1: Recuperar la información de pikachu del API de pokemon y mostrar en la web su imagen frontal y su nombre
// Ejercicio 2: Construcción de la aplicación de POKEDEX:
// Vamos a construir una aplicación para mostrar una pokedex (ver imagen de ejemplo de diseño). La pokedex:
//  - Mostrará el listado con los primeros 150 pokemons en orden. Para cada pokemon se mostrará:
//        * Imagen frontal del pokemon
//        * Nombre del pokemon
//        * Tipo del pokemon
//         * Número de ID del pokemon
//  - Se añadirá un buscador que cuando el usuario vaya escribiendo el nombre, en la lista solo aparecerán los que contengan el texto buscado en su nombre.
//  - (NO ES TRIVIAL) Al hacer click en un pokemon desaparecerá el listado y se mostrará información detallada de ese pokemon (Elegir algunos datos como el ataque)
//  Para obtener los datos utilizaremos el API de https://pokeapi.co/. En concreto necesitaremos obtener datos de las siguientes URL’s:
//  - https://pokeapi.co/api/v2/pokemon?limit=150 => devuelve el listado de los 150 primeros pokemon con su nombre y la URL del API que contiene su información.
//  - Con la URL de cada pokemon obtendremos la información detallada de ese pokemon. Tendremos que utilizar esa URL para obtener esos datos para la pokedex (editado) 



// Ejercicio 1: Recuperar la información de pikachu del API de pokemon y mostrar en la web su imagen frontal y su nombre


    //creo un array de los pokemon
let pokeList = [];
    //con fetch llamamos al servidor para acceder a la imagen
fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
    .then(r => r.json())   // responde con json
        //traducimos el json a datos js
    .then(d => { pokeList = d.results; // buscamos results
            // buscamos en el listado el result que tenga como nombre: pikachu
        const pikachu = pokeList.find( c => c.name.toLowerCase() === 'pikachu');
        console.log(pikachu)
            // guardamos en una variable la url de pikachu
        const pikachuUrl = pikachu.url;
        console.log(pikachuUrl);
            //hacemos otra petición esta vez introduciendo la constante que contiene la url de pikachu
        fetch(pikachuUrl)  
        .then(r => r.json())   
        .then(d => {  console.log(d)
                // metemos la imagen contenida en sprite.front_default en una variable 
            let imagenPika = d.sprites.front_default; 
                // creamos la imagen y le introducimos la ruta en su src
            let imagen = document.createElement('img');
            imagen.src = imagenPika;   
            let titulo = document.createElement('h3');
            let card = document.createElement('div');
                // traemos las clases del css
            card.classList.add("card");
            container_cards.classList.add("container_card");
            card.classList.add("card");
            titulos.classList.add("card");
            
            document.body.appendChild(card)
            card.appendChild(imagen);
            card.appendChild(titulo);

            document.body.appendChild(pikachu);
        })  
        
        


// data.results[0].url
});