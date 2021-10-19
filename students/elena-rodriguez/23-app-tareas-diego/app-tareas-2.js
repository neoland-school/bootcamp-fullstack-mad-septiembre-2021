//Queremos construir una aplicacion web para poder gestionar una lista de tareas. La aplicación tendrá las siguientes funcionalidades:
// - Me debe permitir añadir nuevas tareas a la lista
// - Me debe permitir marcar una tarea como hecha (sin borrarla de la lista)
// - Me debe permitir filtrar mis tareas por todas, sin hacer y completadas
// - Me debe mantener el estado de mi lista de tareas aun cuando apague el ordenador y lo vuelva a encender
// El diseño es libre. Si no se os ocurre nada, podéis coger alguna imagen de ejemplo de internet.



//creamos una funcion que cree un nuevo item que guarde en localStore


//Creamos un evento con la funcion que ejecute cada vez que submit

formulario.addEventListener('submit', function nuevaTarea () {
    const nombres = document.getElementById('tarea').value;
    const descripcion = document.getElementById('descripcion').value;  
    
    localStorage.setItem(nombres, descripcion); 
    document.getElementById('tarea').value = '';
    document.getElementById('descripcion').value = '';
   mostrar();
});



//si quisieramos solo llamar a un item creamos la variable y con getItem introducimos el valor de la clave o key que quemamos mostrar y nos devolverá su valor. En este caso Ondina es la clave y nos devuelve Alvaro, que es su valor.

// let prueba = localStorage.getItem('Ondina');
// console.log(prueba)

//ahora sacamos la lista de tareas registradas en un listado
// Para ello creamos una funcion que vamos a llamar mostrar
//seleccionamos los botones para ver todas las tareas, solo completadas y en proceso

let botonTodas = document.querySelector('.icono');

 botonTodas.addEventListener('click',  () => { 
    let cajaListados = document.querySelector('.cajaListados');
    cajaListados.innerHTML = '';
    const nombres = document.getElementById('tarea').value;
     for ( let i = 0; i < localStorage.length; i++) {    
         nombres = localStorage.key(i);
        localStorage.getItem(nombres);

         cajaListados.innerHTML += '<div>' + nombres  + '</div>';
     };
});

























