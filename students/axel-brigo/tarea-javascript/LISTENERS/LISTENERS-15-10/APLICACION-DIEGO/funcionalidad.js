/*Queremos construir una aplicacion web para poder gestionar una lista de tareas. 
La aplicación tendrá las siguientes funcionalidades:
 - Me debe permitir añadir nuevas tareas a la lista
 - Me debe permitir marcar una tarea como hecha (sin borrarla de la lista)
 - Me debe permitir filtrar mis tareas por todas, sin hacer y completadas
 - Me debe mantener el estado de mi lista de tareas aun cuando apague el ordenador y lo vuelva a encender
 El diseño es libre. Si no se os ocurre nada, podéis coger alguna imagen de ejemplo de internet.*/

'use strict'
 
document.querySelector('.form__container').addEventListener('submit', e => {
    e.preventDefault();
    const formElement = e.target; //selecciono el input
    const inputValue = formElement.task.value; //  agarro el valor del input
    const inputValue2 = formElement.task2.value; //  agarro el valor del input


    const ueleHTML = document.getElementById('uele'); // traigo el ul
    const elLi = document.createElement('li'); // creo el li
    const imagenEnano = document.createElement('img') //traigo la imagen de enanos 

    const ueleHTML2 = document.getElementById('uele2'); // traigo el segundo ul
    const elLi2 = document.createElement('li'); // creo el segundo li
   


    imagenEnano.src = "./assets/enano.jpg";
    imagenEnano.height = "70";  
    elLi.textContent = inputValue; // agrego el valor del input
    elLi2.textContent = inputValue2; // agrego el valor del segundo input
    ueleHTML.appendChild(elLi);
    ueleHTML2.appendChild(elLi2);
    imagenEnano.appendChild(meterImagen);

})