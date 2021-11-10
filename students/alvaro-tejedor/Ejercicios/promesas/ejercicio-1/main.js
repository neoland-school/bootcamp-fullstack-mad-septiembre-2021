
//creamos una promesa y reflejamos su resultado resolve en el navegador

const myPromise = new Promise((resolve) => {
    setTimeout(() =>{
        resolve('Hello World')
    }, 0);
})

myPromise.then((value) => {
    const pDom = document.createElement('p');
    pDom.textContent = value;
    document.body.appendChild(pDom);
});

// Crear boton e imprimir del 1 al 10 cada 0,5 segundos

const boton = document.createElement('button');
boton.textContent = 'click';
document.body.appendChild(boton);
let contador = 1;
let contadorPar = 0;
boton.addEventListener('click', e => {
    
    const intervalo = setInterval(() => {
        const pNumeros = document.createElement('p');
        pNumeros.textContent = contador;
        document.body.appendChild(pNumeros);
        contador += 2
        if(contador === 11) {
            clearInterval(intervalo)};
    }, 500);


setTimeout(() => {
const intervaloPar = setInterval(() => {
    const pNumeros = document.createElement('p');
    pNumeros.textContent = contadorPar;
    document.body.appendChild(pNumeros);
    contadorPar += 2
    if(contadorPar === 12) {
        clearInterval(intervaloPar)};
}, 1000);
}, 4000);

})

// create a clock

function clock(){
    const date = new Date();
    const hour= date.getHours();
    const minutos= date.getMinutes();
    const segundos = date.getSeconds();
    hour < 10 ? "0" + hour : hour;
    minutos <10 ? "0" + minutos: minutos;
    segundos < 10 ? "0" + segundos : segundos;
    const reloj = document.querySelector('.reloj');
    reloj.textContent = `${hour}:${minutos}:${segundos}`;
    const t = setTimeout(() => {
        clock()
        
    }, 1000);



}

clock();






// creamos un temporizador 

const formulario = document.querySelector('.form');
const formContainer = document.querySelector('.form-container');
const input = document.querySelector('.input');
const botonInput = document.querySelector('.form__btn');

// tengo que crear un conatador para el temporadizador
let counter = 0;
formulario.addEventListener('submit', e => {
    console.log(e);
    e.preventDefault();
    valorInput = parseInt(e.target.numero.value);
    //le damos un condicional para que solo puedan meter valores mayores que 0
    if(valorInput >= 0){
    const pTemporizador = document.createElement('p');
    const h1FinTemporizador = document.createElement('h1');
    h1FinTemporizador.classList.add('h1');
    formContainer.appendChild(pTemporizador);
    formContainer.appendChild(h1FinTemporizador);
    const intervaloInput = setInterval(() => {
        pTemporizador.textContent= counter;
        if(counter === valorInput){
            clearInterval(intervaloInput);
            h1FinTemporizador.textContent= `Has llegado a ${valorInput}`;
        }
        counter++
    }, 1000);
    e.target.numero.value= '';
    counter = 0;
    
    formulario.addEventListener('submit', e => {
        pTemporizador.style.display = 'none';
        h1FinTemporizador.style.display = 'none';
    })
    }else {
        alert('introduce un número válido');
    }
})










    


