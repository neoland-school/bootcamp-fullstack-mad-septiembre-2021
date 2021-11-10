// Ejercicio 2: Construcción de la aplicación de POKEDEX:
// Vamos a construir una aplicación para mostrar una pokedex (ver imagen de ejemplo de diseño). La pokedex:
//  - Mostrará el listado con los primeros 150 pokemons en orden. Para cada pokemon se mostrará:
//        * Imagen frontal del pokemon
//        * Nombre del pokemon
//        * Tipo del pokemon
//  - Se añadirá un buscador que cuando el usuario vaya escribiendo el nombre, 
// en la lista solo aparecerán los que contengan el texto buscado en su nombre.
//  - (NO ES TRIVIAL) Al hacer click en un pokemon desaparecerá el listado y se mostrará información detallada de ese pokemon 
// (Elegir algunos datos como el ataque)
//  Para obtener los datos utilizaremos el API de https://pokeapi.co/. En concreto necesitaremos obtener datos de las siguientes URL’s:
//  - https://pokeapi.co/api/v2/pokemon?limit=150 => devuelve el listado de los 150 primeros pokemon con su nombre y la URL del API que contiene su información.
//  - Con la URL de cada pokemon obtendremos la información detallada de ese pokemon. Tendremos que utilizar esa URL para obtener esos datos para la pokedex


fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
    .then(result => result.json())
    .then(data => {
        let arrayPoke = data.results;
        console.log(arrayPoke); //array con los pokemon por nombre
        //Hasta aquí funciona
        arrayPoke.forEach( e=> {
            fetch(e.url)
                .then(result => result.json())
                .then(data => {
                    console.log('entro en funcion');
                    let pokeURL = data;// ya funciona
                    let pokeAbility = data.abilities[0].ability.name;
                    console.log(pokeAbility); // Funciona
                    console.log(pokeURL); // Funciona
                });
        })});