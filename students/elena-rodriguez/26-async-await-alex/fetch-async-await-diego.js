// 2.- Pintar en el HTML un listado de todos los paises estructurado como un "listín telefónico" en que veamos pais (en español), codigo de pais, prefijo
// 3.- Añadir un botón al anterior que tenga el texto "EN", al pulsarlo cambiarán los nombres de los paises a su versión en inglés.
// 4.- Crear un HTML con un input y un botón. Al introducir el usuario un país (en español) debe aparecer debajo la información completa de ese país.
// 5.- Refactorizar el código anterior para lograr que al introducir "Arg" o "arg" aparezca un listado con la información de todos los paises que empiecen por 'arg'
// 6.- Mostrar en un html los paises cuyo prefijo telefónico se encuentre en el rango 20<x<600. Además debemos mostrar cuántos países son en total.



// 2.- Pintar en el HTML un listado de todos los paises estructurado como un "listín telefónico" en que veamos pais (en español), codigo de pais, prefijo

// fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
// .then(response => response.json())      // decimos que la promesa devuelve el arcivo .json
// .then(datos => {        //  traducimos el json a js
//    let listaPaises = datos.countries;     // Usamos todos los datos.
//    listaPaises.forEach(element => {    // le hacemos un forEach para que recorra todos los elementos  
//       const fistTagList = document.createElement('ul');  // al ser listados mete automáticamente en el ul los li
//       const country = document.createElement('li');         
//       const codeCountry = document.createElement('li');      
//       const preFije = document.createElement('li');         
      
//       country.textContent = element.name_es;  
//       codeCountry.textContent = element.code;  
//       preFije.textContent = element.dial_code;  
//      document.body.appendChild(fistTagList);       
//      document.body.appendChild(country);           
//      document.body.appendChild(codeCountry);       
//      document.body.appendChild(preFije);           
//    });
// });


// 3.- Añadir un botón al anterior que tenga el texto "EN", al pulsarlo cambiarán los nombres de los paises a su versión en inglés.


// const botonEn = document.createElement('button');
// botonEn.textContent = 'EN';
// document.body.appendChild(botonEn);


// botonEn.addEventListener('click', () => {
//     document.body.innerHTML = '';  // borra todo el html anterior y deja solo el código siguiente. Por eso el botón desaparece después de cambiarlo.
//     fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
//     .then(response => resultado.json())      
//     .then(datos => {     
//        const listCountries = datos.countries;    
//        listCountries.forEach(element => {      
//           const fistTagList = document.createElement('ul');     
//           const country = document.createElement('li');         
//           const codeCountry = document.createElement('li');      
//           const preFije = document.createElement('li');         
          
//           country.textContent = element.name_en;  
//           codeCountry.textContent = element.code;  
//           preFije.textContent = element.dial_code;  
//          document.body.appendChild(fistTagList);       
//          document.body.appendChild(country);           
//          document.body.appendChild(codeCountry);       
//          document.body.appendChild(preFije);          
        
//        });
          
//     }); 
    
// });


// 4.- Crear un HTML con un input y un botón. Al introducir el usuario un país (en español) debe aparecer debajo la información completa de ese país.


let inputForm = document.getElementById('inputID');
let countries = []; // countries guardará los países


        // Recupero los países y los asocio a una variable
fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
.then(response => response.json())      
.then(datos => countries = datos.countries);  

    // Creo el evento 
document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    const busquedaInput = e.target.search.value;
    const country = countries.findIndex(c => c.name_es.toLowerCase() === userSearch.toLowerCase());
    
    const fistTagList = document.createElement('ul'); 
    const country = document.createElement('li');         
    const codeCountry = document.createElement('li');      
    const preFije = document.createElement('li');         
});
    
});






let newArray = datos.countries.filter (a => a.name_en.length <= 4 ); 
       listCountries.forEach(element => {      
          const fistTagList = document.createElement('ul'); 
          const country = document.createElement('li');         
          const codeCountry = document.createElement('li');      
          const preFije = document.createElement('li');         
});