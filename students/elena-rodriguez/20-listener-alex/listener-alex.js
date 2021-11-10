//1- crear un archivo HTML que tenga un div vacío y un boton (añadir). Cada vez que pulse en el botón se debe añadir un p con el texto añadido desde JS dentro del div

//Primero creamos los elementos, despues los modificamos, les añadimos.  
//creamos la constante que guarda el div y después el boton
const contenedor = document.createElement('div');

const boton = document.createElement('button');
// metemos el boton dentro del div 
contenedor.appendChild(boton);
//metemos un texto en el boton
boton.textContent = 'añadir';



//creamos el evento click y le indicamos que cuando se haga click, se cree un parrafo con un texto dentro del contenedor. 
boton.addEventListener('click', () => { 
    const parrafo = document.createElement('p');
    parrafo.textContent ='Lo has conseguido';
    contenedor.appendChild(parrafo);
});

document.body.appendChild(contenedor);





//2. Contador: Crear un HTML con un botón (-) un p y otro botón (+). El p inicialmente mostrará 0. Cuando pulse en el + se deberá sumar uno al valor del p. Cuando pulse en el menos se deberá restar 1.
//guardamos en una variable cada uno de los elementos que vamos a usar

let botonMas = document.getElementById('positivo');
let botonMenos = document.getElementById('negativo');
let texto = document.querySelector('p');

const ultimoValor  = localStorage.getItem('resultado');


if (ultimoValor !== null  ){
    texto.textContent = ultimoValor;

}
        
botonMas.addEventListener('click', () => {   //cuando se haga click en el boton +
    let contenidoP = texto.textContent;    // el parrafo llamado texto le metemos textContent
    let contenido = parseInt(contenidoP);  // parseamos para que su tipo de dato sea numérico
    contenido = contenido + 1;    //le decimos que tendrá que sumar uno cada vez
    texto.textContent = contenido;   //le decimos que el resultado se meta en el parrafo
   localStorage.setItem('resultado', contenido);   //le decimos que lo guarde en el localStore     
})

botonMenos.addEventListener('click', () => {
    let contenidoPmenos = texto.textContent;
    let contenidoMenos = parseInt(contenidoPmenos);
    contenidoMenos = contenidoMenos - 1;
    texto.textContent = contenidoMenos; //aquí le estamos diciendo que meta el resultado de contenido como un textContent.
    localStorage.setItem('resultado', contenidoMenos);
   
})


//es conveniente usar JSON.stringyfy() para cambiar el tipo de dato si usamos datos tipo array 


//3. Modificar el ejercicio 2 para que cuando el usuario refresque la página, el p se inicialice con el valor que había dejado antes





















    
    
   
    

    

    
    
    
    listaTareasCreadas = localStorage.getItem('submit', (e) => {
        añadirTarea);
    }
    
    
    let listaTareasCreadas = localStorage.getItem('añadirDescripcion')
    
    
    
    
    
    
    // 1º seleciono los elementos y los guardo en variables por separado
    
    
 
    
    
    
    
    // creo un listado para cada boton
    let listaTerminada = document.createElement('ul');
    let listaTerminadaLi = document.createElement ('li');
    
    
    let listaPendiente = document.createElement ('ul');
    
    
    let listaTodas = document.createElement('ul');
    
    
    
    
    
    
    