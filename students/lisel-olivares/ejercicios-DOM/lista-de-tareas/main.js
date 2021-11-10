/*Queremos construir una aplicacion web para poder gestionar una lista de tareas. La aplicación tendrá las siguientes funcionalidades:
 - Me debe permitir añadir nuevas tareas a la lista
 - Me debe permitir marcar una tarea como hecha (sin borrarla de la lista)
 - Me debe permitir filtrar mis tareas por: todas, sin hacer y completadas
 - Me debe mantener el estado de mi lista de tareas aun cuando apague el ordenador y lo vuelva a encender
 El diseño es libre. Si no se os ocurre nada, podéis coger alguna imagen de ejemplo de internet.*/

const boton = document.getElementsById('añadir');
const tarea = document.getElementsById('task');

boton.addEventListener('click', e=>{
    let miTarea = tarea.value;
    let texto = document.createElement('p');
    texto.textContent = miTarea;
const lista = document.getElementById('list'); // traer ul
const elemento = document.createElement('li'); // cremos la lista de elementos li

texto.
})