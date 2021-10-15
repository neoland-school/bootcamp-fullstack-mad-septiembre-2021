// 2- Crear un HTML que tenga un formulario con un input y un p debajo. cada vez que el usuario escriba en el input, se deberá actualizar el p con el valor que va escribiendo. En este caso tendremos que usar el evento keypress de los inputs (edited) 



const formInput = document.querySelector('.form__container');
const change = document.querySelector('[data-info-container]');

formInput.addEventListener('keyup', e => {
    console.log(e);
    const formElement = e.target;
    
    change.textContent = formElement;
    change.value = '';
})








