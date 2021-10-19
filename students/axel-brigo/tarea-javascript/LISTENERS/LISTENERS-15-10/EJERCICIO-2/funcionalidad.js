//2- Crear un HTML que tenga un formulario con un input 
// y un p debajo.cada vez que el usuario escriba en el input, 
//se deberá actualizar el p con el valor que va escribiendo.
//En este caso tendremos que usar el evento keyup de los inputs (edited)


const eslape = document.getElementById('pdehtml');

document.querySelector('#name').addEventListener('keyup', e => { // agarro el fotm y creo el evento keyup
    const elementInput = e.target; // obtengo el input
     
    eslape.textContent = elementInput.value;

})