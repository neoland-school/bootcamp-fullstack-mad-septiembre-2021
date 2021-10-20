// 1.- Crear una promesa que cuando se resuelva tras 5 segundos muestre un <p>Hello World</p> en el navegador.

// 5.-Crear un input y un botón en el navegador. El input recibirá un valor numérico (habrá que "parsearlo") y al pulsar el botón comenzará a correr el tiempo en segundos. Cuando se alcance el valor introducido en el input se parará el cronómetro y se mostrará el texto "Finish" en el navegador. Al pulsar el boton debe aparecer un p que me diga si el horario esta conectado o no a internet.
//OPCIONAL: además mostrara el nivel exacto de batería que le queda al ordenador.

// const promesa = new Promise((resolve) => {
//     setTimeout(function(){
//         let sentence = document.createElement('p');
//         sentence.textContent = 'Hello World';
//         document.querySelector('body').appendChild(sentence);
//         resolve('se ha resuelto bien');
//     }, 5000);
// });

// 2.- Colocar un botón en el navegador que al pulsarlo nos dibuje los números del 0 al 10. Entre elemento y elemento debe transcurrir 0.5 segundos. 


// let num = -1;
// let boton = document.querySelector('button');

// boton.addEventListener('click', () =>  {
//     const parar = setInterval(() => {
//         num +=1;
//         let parraf = document.createElement('p');
//         parraf.textContent = num;
//         document.querySelector('div').appendChild(parraf);
//         if (num === 10){
//             clearInterval(parar);
//         }
//     }, 500);
// })

// 3.- Refactorizar el ejercicio anterior para que al pulsar el botón aparezcan los número impares de 1 en 1 cada 0,5 segundos y posteriormente (después de + 1,5 segundos) aparezcan los pares cada 5 segundos.

let num = -1;
let boton = document.querySelector('button');

boton.addEventListener('click', (e) => {
    e.preventDefault();
    const parar = setInterval(() => {
        num += 2;
        let parraf = document.createElement('p');
        parraf.textContent = num;
        document.querySelector('div').appendChild(parraf);
        if (num === 9) {
            num = 0;
            clearInterval(parar);


            setTimeout(() => {
                num += 2;
                let parraf1 = document.createElement('p');
                parraf1.textContent = num;
                document.querySelector('div').appendChild(parraf1);
                const parar2 = setInterval(() => {
                    num += 2;
                    parraf1 = document.createElement('p');
                    parraf1.textContent = num;
                    document.querySelector('div').appendChild(parraf1);
                    if (num === 10) {
                        clearInterval(parar2);
                    }
                }, 5000);
            }, 1500);
        }
    }, 500);
})

// 4.-Crear una función que se ejecute cada 1 segundo y pinte por pantalla un reloj con el formato hh:mm:ss (si alguna unidad es menor de 10 podemos mostrarla en el formato h:m:s). ***Investigar métodos get de la clase Date*** OPCIONAL: gestionar que el formato sea hh:mm:ss en todo momento (03:05:03)


// let nuevoP = document.createElement('p');
// document.querySelector('body').appendChild(nuevoP);

// const reloj = setInterval(() => {
//     let relojito = new Date();
//     let relojito2 = relojito.getSeconds();
//     if (relojito.getSeconds() < 10) {
//         relojito2 = '0' + JSON.stringify(relojito.getSeconds());
//     }
//     nuevoP.innerText = relojito.getHours() + ':' + relojito.getMinutes() + ':' + relojito2;
// }, 1000);

// // 5.-Crear un input y un botón en el navegador. El input recibirá un valor numérico (habrá que "parsearlo") y al pulsar el botón comenzará a correr el tiempo en segundos. Cuando se alcance el valor introducido en el input se parará el cronómetro y se mostrará el texto "Finish" en el navegador. Al pulsar el boton debe aparecer un p que me diga si el horario esta conectado o no a internet.
// // //OPCIONAL: además mostrara el nivel exacto de batería que le queda al ordenador.

// let bot = document.querySelector('form');
// let counter = 0;

// let watch = document.createElement('p');
// document.querySelector('div').appendChild(watch);



// bot.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let parar = setInterval(() => {
//         counter++;
//         if (counter < e.target.numero.value) {
//             watch.innerHTML = counter;
//         } else {
//             watch.classList.add('rojo');
//             watch.innerHTML = 'Ha llegado al ' + counter;
//             clearInterval(parar);
//         }
//     }, 1000);
// });

