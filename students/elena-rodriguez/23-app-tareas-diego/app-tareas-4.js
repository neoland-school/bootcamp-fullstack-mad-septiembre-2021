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

});

//si quisieramos solo llamar a un item creamos la variable y con getItem introducimos el valor de la clave o key que quemamos mostrar y nos devolverá su valor. En este caso Ondina es la clave y nos devuelve Alvaro, que es su valor.

// let prueba = localStorage.getItem('Ondina');
// console.log(prueba)


//vamos a crear una funcion que inicie una secuencia de funciones. 





for ( let i = 0; i < localStorage.length; i++) {  
    let cajaListados = document.querySelector('.cajaListados');
    let parrafo = document.createElement('p');
    cajaListados.appendChild(parrafo);
   
    clave = localStorage.key(i);
    localStorage.getItem(clave);
    valor = localStorage.key(i);
    localStorage.getItem(valor);
    parrafo = parrafo.textContent
    parrafo = clave + localStorage.getItem(clave);
    document.body.appendChild(`${i + 1 } ${parrafo}`)
 };

const listados = 



function iniciar () {

}


function mostrar (clave, valor) { 
    

   
     
     return parrafo
};

let nombres = document.getElementById('tarea').value;
let descripcion = document.getElementById('descripcion').value; 
let botonTodas = document.querySelector('.icono');

botonTodas.addEventListener('click', mostrar(nombres, descripcion));


//ahora sacamos la lista de tareas registradas en un listado
// Para ello creamos una funcion que vamos a llamar mostrar
//seleccionamos los botones para ver todas las tareas, solo completadas y en proceso


























