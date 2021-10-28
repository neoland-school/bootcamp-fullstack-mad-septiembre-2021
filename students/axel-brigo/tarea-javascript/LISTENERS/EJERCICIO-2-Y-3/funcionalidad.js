// Crear un HTML con un boton (-) un p y otro boton (+). El p inicialmente mostrara 0 .
//cuando pulse en el + se debera sumar uno al valor del p. 
// Cuando pulse en el menos  se debera restar 1

const botonSumar = document.getElementById('botonMas');
const botonRestar = document.getElementById('botonMenos');
const botonResultado = document.getElementById('sumarP');

const lectura = localStorage.getItem('clave');

if (lectura !== null) {

    botonResultado.textContent = lectura;
}


botonSumar.addEventListener('click', e => {
    botonResultado.textContent = parseInt(botonResultado.textContent) + 1;  //el parseInt lo pasa a numero ya que era string 
    localStorage.setItem('clave', (botonResultado.textContent));
})

botonRestar.addEventListener('click', e => {
    botonResultado.textContent = botonResultado.textContent - 1;
    localStorage.setItem('clave', (botonResultado.textContent));
})

//3. Modificar el ejercicio 2 para que cuando el usuario refresque la página,
// el p se inicialice con el valor que había dejado antes
























/*const botonSumar = document.getElementById('botonMas');
const botonRestar = document.getElementById('botonMenos');
const botonResultado = document.getElementById('sumarP');

const lectura = localStorage.getItem('clave');

if (lectura !== null) {
    botonResultado.textContent = lectura;
}


botonSumar.addEventListener('click', e => {
    botonResultado.textContent = parseInt(botonResultado.textContent) + 1;  //el parseInt lo pasa a numero ya que era string 
    localStorage.setItem('clave', parseInt(botonResultado.textContent));
})

botonRestar.addEventListener('click', e => {
    botonResultado.textContent = botonResultado.textContent - 1;
    localS*/