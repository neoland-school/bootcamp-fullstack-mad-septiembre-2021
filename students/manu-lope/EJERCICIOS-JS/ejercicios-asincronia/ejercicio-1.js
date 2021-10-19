// Primera tanda de hoy:

// 1.- Crear una promesa que cuando se resuelva tras 5 segundos muestre un <p>Hello World</p> en el navegador.

// 2.- Colocar un botón en el navegador que al pulsarlo nos dibuje los números del 0 al 10. 
// Entre elemento y elemento debe transcurrir 0.5 segundos. 

// 3.- Refactorizar el ejercicio anterior para que al pulsar el botón aparezcan los número impares 
// de 1 en 1 cada 0,5 segundos y posteriormente (después de + 1,5 segundos) aparezcan los pares cada 5 segundos.

// 4.-Crear una función que se ejecute cada 1 segundo y pinte por pantalla un reloj con el formato hh:mm:ss 
// (si alguna unidad es menor de 10 podemos mostrarla en el formato h:m:s). 
// ***Investigar métodos get de la clase Date*** OPCIONAL: gestionar que el formato sea hh:mm:ss en todo momento (03:05:03)

// 5.-Crear un input y un botón en el navegador. El input recibirá un valor numérico 
// (habrá que "parsearlo") y al pulsar el botón comenzará a correr el tiempo en segundos. 
// Cuando se alcance el valor introducido en el input se parará el cronómetro y se mostrará el texto "Finish" en el navegador.



let myFirstPromise = new Promise((resolve, reject) => {
    // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
    // In this example, we use setTimeout(...) to simulate async code.
    // In reality, you will probably be using something like XHR or an HTML5 API.
    setTimeout(function () {
        resolve("Success!")  // Yay! Everything went well!
    }, 5000)
})

myFirstPromise.then((successMessage) => {
    // successMessage is whatever we passed in the resolve(...) function above.
    // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
    console.log("Yay! " + successMessage)
});

