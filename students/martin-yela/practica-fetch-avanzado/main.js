// 1- Crear un Endpoint (una URL con datos) de tipo GET con la página designer.mocky.io, con la siguiente respuesta (200 ok):
// {
//   name: 'Madrid',
//   image: 'https://www.collegiate-ac.es/propeller/uploads/sites/3/2019/10/city-hero-madrid-1450x742.jpg'
// }
// Pintar la imagen de Madrid en el body

// function draw(arr){
//     console.log(arr);
//     let box = document.createElement('div');
//     let sentence = document.createElement('p');
//     sentence.textContent = `Nombre: ${arr.name}`; 
//     let imag =document.createElement('img');
//     imag.src = arr.image;

//     box.appendChild(sentence);
//     box.appendChild(imag);
//     document.body.appendChild(box);
// }

// async function makePromise(){
//     const r = await fetch('https://run.mocky.io/v3/a55140db-1953-4818-8262-9f8ac99af141');
//     const d = await r.json();

//     return d;
// }

// async function makeArray(){
//     const arr = await makePromise();
//     draw(arr);
// }

// makeArray();

// 2. Crear un endpoint de tipo PUT (con la página de beeceptor) con el siguinete pah (/primer-put) que no responda nada en el body y mandarle la siguiente información: 

// {
//   status: 'Encantado con lo que aprendo'
// }

// 2.1 En un HTML tener un botón que cuando se haga click se envíe el PUT del ejercicio 2



document.querySelector('button').addEventListener('click', () => {
    const firstPut = {
        method: 'PUT',
        body: JSON.stringify({ status: 'Encantado con lo que aprendo' })
    };

    fetch('https://nueva.free.beeceptor.com/nueva', firstPut)
        .then(r => console.log(r))
})