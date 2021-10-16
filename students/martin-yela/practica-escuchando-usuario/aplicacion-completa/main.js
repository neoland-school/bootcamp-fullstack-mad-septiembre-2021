// Queremos construir una aplicacion web para poder gestionar una lista de tareas. La aplicación tendrá las siguientes funcionalidades:
//  - Me debe permitir añadir nuevas tareas a la lista
//  - Me debe permitir marcar una tarea como hecha (sin borrarla de la lista)
//  - Me debe permitir filtrar mis tareas por todas, sin hacer y completadas
//  - Me debe mantener el estado de mi lista de tareas aun cuando apague el ordenador y lo vuelva a encender
//  El diseño es libre. Si no se os ocurre nada, podéis coger alguna imagen de ejemplo de internet.


let form = document.querySelector('.formulario');
let datoTitle = document.querySelector('.titulo');
let datoDescription = document.querySelector('.description');
let listTar = document.querySelector('.tarea_lista');
let listTar2 = document.querySelector('.descripcion');
let listTar3 = document.querySelector('.simbolo');
let contador = 0;

form.addEventListener('submit', (e) => {
    contador++;
    e.preventDefault();

    let simb = document.createElement('li');
    simb.textContent = '0';
    listTar3.appendChild(simb);

    
    let titulo = document.createElement('li');
    titulo.textContent = e.target.title.value;
    listTar.appendChild(titulo);
    localStorage.setItem('elTitulo'+JSON.stringify(contador), titulo.textContent);

    let descrip = document.createElement('li');
    descrip.textContent = e.target.tarea.value;
    listTar2.appendChild(descrip);
    localStorage.setItem('laDescripcion'+JSON.stringify(contador), descrip.textContent);
    document.querySelector('input').value = '';
    document.querySelector('textarea').value = '';
});

