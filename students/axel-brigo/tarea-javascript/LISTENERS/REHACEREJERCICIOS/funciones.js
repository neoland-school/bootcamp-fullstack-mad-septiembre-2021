'use strict'


const sumador = document.getElementById('sumar');
const restador = document.getElementById('restar');
const resultador = document.getElementById('contador');

const leerValor = localStorage.getItem('clave');

if (leerValor !== null) {

    resultador.textContent = leerValor;
}


sumador.addEventListener('click', e => {

    resultador.textContent = parseInt(resultador.textContent) + 1;
    localStorage.setItem('clave', parseInt(resultador.textContent));
});


restador.addEventListener('click', e => {

    resultador.textContent = resultador.textContent - 1;
    localStorage.setItem('clave', parseInt(resultador.textContent))
});



