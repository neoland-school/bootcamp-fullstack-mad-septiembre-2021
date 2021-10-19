//Queremos construir una aplicacion web para poder gestionar una lista de tareas. La aplicación tendrá las siguientes funcionalidades:
// - Me debe permitir añadir nuevas tareas a la lista
// - Me debe permitir marcar una tarea como hecha (sin borrarla de la lista)
// - Me debe permitir filtrar mis tareas por todas, sin hacer y completadas
// - Me debe mantener el estado de mi lista de tareas aun cuando apague el ordenador y lo vuelva a encender
// El diseño es libre. Si no se os ocurre nada, podéis coger alguna imagen de ejemplo de internet.



//creamos una funcion que cree un nuevo item que guarde en localStore


//Creamos un evento que incluya la funcion anterior para que ejecute cada vez que submit
formulario.addEventListener('submit', function nuevaTarea () {
    const nombres = document.getElementById('tarea').value;
    const descripcion = document.getElementById('descripcion').value;  
   localStorage.setItem(descripcion, nombres);   
});


//ahora sacamos la lista de tareas registradas en un listado
// creamos una funcion que meta cada item en un parrafo

const mostrar = localStorage.getItem(nombres);
console.log(mostrar)



//seleccionamos el parrafo donde meteremos el listado 
let listaT = document.querySelector('p');


//creamos el evento de todas las tareas  

botonTodas.addEventListener('click',  () => { 
        let listaTodas = listaT.textContent;
        listaTodas = mostrar;
        localStorage.getItem(listaTodas);
        
})























