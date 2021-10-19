// 1.- Crear una promesa que cuando se resuelva tras 5 segundos muestre un <p>Hello World</p> en el navegador.

const myPromise = new Promise ((resolve) =>{
    //el código que hay aqui se ejecutará de manera asíncrona
    setTimeout(()=>{
        resolve ('Hello World');
    }, 5000);
}) 

myPromise.then((value)=>{
    const printElement = document.createElement('p');
    printElement.textContent = value;
    document.body.appendChild(printElement);
})

// 2.- Colocar un botón en el navegador que al pulsarlo nos dibuje los números del 0 al 10. Entre elemento y elemento debe transcurrir 0.5 segundos. 

const buttonPrinter = document.createElement('button');
buttonPrinter.textContent = 'Press me to print the numbers';
buttonPrinter.classList.add('button__Input');
document.body.appendChild(buttonPrinter);
let contador = 0;

document.querySelector('.button__Input').addEventListener('click', e => {
    const interval = setInterval(() => {
            const printNum = document.createElement('p');
            printNum.textContent = contador;
            document.body.appendChild(printNum);
            contador++;
        if (contador === 11) {
            clearInterval(interval);
        }
    }, 500);
});


// 3.- Refactorizar el ejercicio anterior para que al pulsar el botón aparezcan los número impares de 1 en 1 cada 0,5 segundos y posteriormente (después de + 1,5 segundos) aparezcan los pares cada 5 segundos.

const buttonPrinter = document.createElement('button');
buttonPrinter.textContent = 'Press me to print the numbers';
buttonPrinter.classList.add('button__Input');
document.body.appendChild(buttonPrinter);
let counter = 1;

document.querySelector('.button__Input').addEventListener('click', e => {
    const interval = setInterval(() => {
        const printNum = document.createElement('p');
        printNum.textContent = counter;
        document.body.appendChild(printNum);
        counter+=2;
        if (counter === 11) {
            clearInterval(interval);
            counter = 0;
        }
    }, 500);

    setTimeout(() => { }, 1000);
    const intervalEven = setInterval(() => {
        const printNumEven = document.createElement('p');
        printNumEven.textContent = counter;
        document.body.appendChild(printNumEven);
        counter += 2;
        if (counter === 11) {
            clearInterval(intervalEven)
        }
    }, 5000);
});

// 4.-Crear una función que se ejecute cada 1 segundo y pinte por pantalla un reloj con el formato hh:mm:ss (si alguna unidad es menor de 10 podemos mostrarla en el formato h:m:s). ***Investigar métodos get de la clase Date*** OPCIONAL: gestionar que el formato sea hh:mm:ss en todo momento (03:05:03)

// div has to be created in html outside the object

const showTime = document.querySelector('.clock__container');
const updateTime = setInterval(() => {
    let clock = new Date();
    let hours = clock.getHours();
    let minutes = clock.getMinutes();
    let seconds = clock.getSeconds();
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    showTime.innerText = `It's ${hours}:${minutes}:${seconds}`;
    document.body.appendChild(showTime);
}, 1000);

// 5.-Crear un input y un botón en el navegador. El input recibirá un valor numérico (habrá que "parsearlo") y al pulsar el botón comenzará a correr el tiempo en segundos. Cuando se alcance el valor introducido en el input se parará el cronómetro y se mostrará el texto "Finish" en el navegador.

const formInput = document.querySelector('.form__container');
const inputContainer = document.querySelector('.input__timer');//it has to be a div or an element that admits other elements
let timerWatch = document.createElement('p'); //p element that will be updated with the timer
inputContainer.appendChild(timerWatch);
let counter = 0;

formInput.addEventListener('submit', (e) => {
    e.preventDefault();
    let interval = setInterval(() => { //set the function that will update the timer
        counter++;
        if (counter < e.target.input__clock.value) {
            timerWatch.innerHTML = counter;
        }
        else {
            timerWatch.innerHTML = `Finish!`;
            clearInterval(interval);
        }
    }, 1000);
});