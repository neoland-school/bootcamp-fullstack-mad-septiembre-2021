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
        let secondArray = arrayPoke.find(word => word.name); // sólo consigo algo con map, find o forEach
        console.log(secondArray); // find(word => word.name) sólo me pilla el primero //
                                 //forEach(word => word.name) da undefined
                                 //map(word => word.name) // me crea una nueva array sólo con nombres
        fetch(secondArray.url) 
            .then(result => result.json())
            .then(data => {
                console.log('entro en funcion');
                let pokeURL = data.results;
                console.log(pokeURL) // da undefined
                console.log('he llegado hasta aqui'); // da undefined
                });

            });

            // me voy a dormir, mañana será otro día.