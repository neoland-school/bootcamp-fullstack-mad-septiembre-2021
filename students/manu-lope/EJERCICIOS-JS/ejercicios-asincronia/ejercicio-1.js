// 1.- Crear una promesa que cuando se resuelva tras 5 segundos muestre un <p>Hello World</p> en el navegador.

// 4.-Crear una función que se ejecute cada 1 segundo y pinte por pantalla un reloj con el formato hh:mm:ss 
// (si alguna unidad es menor de 10 podemos mostrarla en el formato h:m:s). 
// ***Investigar métodos get de la clase Date*** OPCIONAL: gestionar que el formato sea hh:mm:ss en todo momento (03:05:03)

// 5.-Crear un input y un botón en el navegador. El input recibirá un valor numérico 
// (habrá que "parsearlo") y al pulsar el botón comenzará a correr el tiempo en segundos. 
// Cuando se alcance el valor introducido en el input se parará el cronómetro y se mostrará el texto "Finish" en el navegador.



let myFirstPromise = new Promise((resolve, reject) => {

    setTimeout(()=> {
        resolve('promesa resuelta')
    }, 5000);

})

myFirstPromise.then((valorResolve) => { //metemos el códigod de la función para que funcione en resolve
    let textDom = document.createElement('p');
        textDom.textContent = (`HELLO WORLD!`); 
        document.body.appendChild(textDom);
    console.log(valorResolve)
});

