// async function printBiggestCountry(){
//     const r = await fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json');
//     const d = await r.json();
//     d.countries.forEach(element => {
//         if (element.name_en.length === 4) {
//             const p = document.createElement('p');
//             p.textContent = element.name_en;
//             document.body.appendChild(p);
//         }
//     });
//   }
// printBiggestCountry();

// Nombre en español, codigo país y prefijo

// fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
// .then(r => r.json())
// .then(d => {
//     d.countries.forEach(element => {
//         const sorted = document.createElement('p');
//         sorted.textContent = `Nombre: ${element.name_es}, Prefijo: ${element.dial_code}, Código: ${element.code} `;
//         document.body.appendChild(sorted);
//     })
//     })

// 3.- Añadir un botón al anterior que tenga el texto "EN", al pulsarlo cambiarán los nombres de los paises a su versión en inglés.
// se puede refactorizar una funcion fetch (un parámetro de idioma) y con dos condiciones en funcion del idioma
// fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
//     .then(r => r.json())
//     .then(d => {
//         d.countries.forEach(element => {
//             const sorted = document.createElement('p');
//             sorted.innerText= `Nombre: ${element.name_es}, Prefijo: ${element.dial_code}, Código: ${element.code} `;
//             document.body.appendChild(sorted);
//         })
//     });

// document.querySelector('.translate__button').addEventListener('click', () => {
//     document.body.innerHTML='';
//     fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
//         .then(r => r.json())
//         .then(d => {
//             d.countries.forEach(element => {
//                 const sorted = document.createElement('p');
//                 sorted.innerText = `Name: ${element.name_en}, Prefix: ${element.dial_code}, Code: ${element.code} `;
//                 document.body.appendChild(sorted);
//             })
//         })
// });


// 4.- Crear un HTML con un input y un botón. Al introducir el usuario un país (en español) debe aparecer debajo la información completa de ese país.

// document.querySelector('.form__container').addEventListener('submit', e => {
//     e.preventDefault();
//     const country = e.target.search__input.value;
//     getInfo(country)
// })

// async function getInfo(pais) {
//     const r = await fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json');
//     const d = await r.json();
//     d.countries.forEach(element => {
//         if (element.name_es === pais) {
//             const sorted = document.createElement('p');
//             sorted.innerText = `Nombre en Español: ${element.name_es}, Nombre en Inglés: ${element.name_en}, Prefijo: ${element.dial_code}, Codigo: ${element.code} `;
//             document.body.appendChild(sorted);
//         }

//     })
// }

// 5. Refactorizar el código anterior para lograr que al introducir "Arg" o "arg" aparezca un listado con la información de todos los paises que empiecen por 'arg'

// document.querySelector('.form__container').addEventListener('submit', e => {
//     e.preventDefault();
//     const country = e.target.search__input.value;
//     getInfo(country)
// })

// async function getInfo(input) {
//     const r = await fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json');
//     const d = await r.json();
//     d.countries.forEach(element => {
//         if (element.name_es.toLowerCase().substring(0, input.length) === input.toLowerCase()) {
//             const sorted = document.createElement('p');
//             sorted.innerText = `Nombre en Español: ${element.name_es}, Nombre en Inglés: ${element.name_en}, Prefijo: ${element.dial_code}, Codigo: ${element.code} `;
//             document.body.appendChild(sorted);
//         }

//     })
// }

// 6.- Mostrar en un html los paises cuyo prefijo telefónico se encuentre en el rango 20<x<600. Además debemos mostrar cuantos paises son en total.

let counter = 0;

async function getInfo() {
    const r = await fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json');
    const d = await r.json();
    d.countries.forEach(element => {
        if ((parseInt(element.dial_code) > 20) && (parseInt(element.dial_code) < 600)) {
            counter++;
            const sorted = document.createElement('p');
            sorted.innerText = `Nombre en Español: ${element.name_es}, Nombre en Inglés: ${element.name_en}, Prefijo: ${element.dial_code}, Codigo: ${element.code} `;
            document.body.appendChild(sorted);
        }
    })
    const numberOfCountries = document.createElement('p');
    numberOfCountries.textContent = `the number of countries with prefix between +20 and +600 is ${counter}`;
    document.querySelector('.search__button').insertAdjacentElement('afterend',numberOfCountries);
}

getInfo();

// if ((parseInt(element.dial_code.substring(1, element.dial_code.length)) > 20) && (parseInt(element.dial_code.substring(1, element.dial_code.length)) < 600))