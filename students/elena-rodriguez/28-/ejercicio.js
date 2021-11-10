// 1- Crear un Endpoint (una URL con datos) de tipo GET con la página designer.mocky.io, con la siguiente respuesta (200 ok):

// {
//   name: 'Madrid',
//   image: 'https://www.collegiate-ac.es/propeller/uploads/sites/3/2019/10/city-hero-madrid-1450x742.jpg'
// }

// Pintar la imagen de Madrid en el body

// 2. Crear un endpoint de tipo PUT (con la página de beeceptor) con el siguinete pah (/primer-put) que no responda nada en el body y mandarle la siguiente información: 

// {
//   status: 'Encantado con lo que aprendo'
// }

// 2.1 En un HTML tener un botón que cuando se haga click se envíe el PUT del ejercicio 2





// 1- Crear un Endpoint (una URL con datos) de tipo GET con la página designer.mocky.io, con la siguiente respuesta (200 ok):

// {
//   name: 'Madrid',
//   image: 'https://www.collegiate-ac.es/propeller/uploads/sites/3/2019/10/city-hero-madrid-1450x742.jpg'
// }

// Pintar la imagen de Madrid en el body

// fetch('https://run.mocky.io/v3/d18a984e-9912-435b-9a9a-bb185c0d5c44')
// .then(r => r.json())
// .then(d => {
//     let nameCity = d.image;
//     let imgCity = document.createElement('img');
//     imgCity.src = nameCity;
//     document.body.appendChild(imgCity);
// })

// 2. Crear un endpoint de tipo PUT (con la página de beeceptor) con el siguiente pah (/primer-put) que no responda nada en el body y mandarle la siguiente información: 

// {
//   status: 'Encantado con lo que aprendo'
// }

// 2.1 En un HTML tener un botón que cuando se haga click se envíe el PUT del ejercicio 2

let options = {
    method: 'PUT',
    body: JSON.stringify({status:'encantado con lo que aprendo' })
};

document.querySelector('input').addEventListener('click', () => {
    fetch('https://prueba.free.beeceptor.com/primer-put', options)
    .then(r => console.log(r))
    .then(d => console.log(d))
});


 