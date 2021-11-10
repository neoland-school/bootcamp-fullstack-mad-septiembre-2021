// Crear un HTML que tenga un formulario con un input y un botón. Cuando se pulse el botón deberá ir añadiendo lo que se ha escrito en una lista no ordenada debajo
const buttonInput = document.querySelector('.form__container');

buttonInput.addEventListener('submit', e => {
    e.preventDefault();
    const formElement = e.target;
    const inputTodo = formElement.todo;
    const inputTask = document.createElement('li');
    inputTask.textContent = inputTodo.value;
    const containerDOM = document.querySelector('[data-info-container]');
    containerDOM.appendChild(inputTask);
    inputTodo.value = '';
})








