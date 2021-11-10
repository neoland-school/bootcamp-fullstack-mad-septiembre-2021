// 2. Contador: Crear un HTML con un botón (-) un p y otro botón (+). El p inicialmente mostrará 0. Cuando pulse en el + se deberá sumar uno al valor del p. Cuando pulse en el menos se deberá restar 1.

const selectDiv = document.querySelector('.div__container');
const addButton = document.querySelector('.add__button');
const deleteButton = document.querySelector('.delete__button');
const pText = document.createElement('p');

let counter = 0;
addButton.addEventListener('click', e => {
    counter++;
    pText.textContent = counter;
    selectDiv.appendChild(pText);
})

deleteButton.addEventListener('click', e => {
    counter--;
    pText.textContent = counter;
    selectDiv.appendChild(pText);
})


// 3. Modificar el ejercicio 2 para que cuando el usuario refresque la página, el p se inicialice con el valor que había dejado antes