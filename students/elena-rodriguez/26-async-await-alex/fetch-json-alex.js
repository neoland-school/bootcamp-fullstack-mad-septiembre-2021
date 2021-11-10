// pintar el body los que tengan el nombre más corto


async function printSmallestCountry(){

   const resultado = await fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json');
   const datos = await restultado.json();
   datos.countries.sort((a,b) => a.name_en.length - b.name_en.length);
   const parrafo = document.createElement('p');
   parrafo.textContent = datos.countries.shift().name_en;
   document.body.appendChild(parrafo);
 };

printSmallestCountry();


// 2- Pintar en el HTML los paises que tengan 4 letras en su nombre en castellano


// LO HACEMOS DE DOS FORMAS DISTINTAS: CON ASYNC/AWAIT Y TAMBIÉN CON FETCH

async function prinCountriesES(){

   const resultado = await fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json');
   const datos = await resultado.json();
   const newArray = datos.countries.filter (a => a.name_en.length <= 4 );   
   newArray.forEach(element => {
      const parrafo = document.createElement('p');
      parrafo.textContent = element.name_es;
      document.body.appendChild(parrafo);
   });
};

printSmallestCountry();   // Ejecutamos la función


      // MISMO EJERCICIO USANDO FETCH

fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
.then(resultado => resultado.json())      // decimos que la promesa devuelve el arcivo .json
.then(datos => {        //  traducimos el json a js
   let newArray = datos.countries.filter (a => a.name_en.length <= 4 );     // Usamos filter para obtener un nuevo array con las palabras que tengan 4 letras o menos.
   newArray.forEach(element => {    // a ese nuevo array le hacemos un forEach para que recorra todos los elementos  
      const parrafo = document.createElement('p');          // 
      parrafo.textContent = element.name_es;               //  solo los de tipo name_es (de los elementos los name_es)
      document.body.appendChild(parrafo);           //   y los imprima
   });
});






