// 3. Modificar el ejercicio 2 para que cuando el usuario refresque la página, el p se inicialice con el valor que había dejado antes

const selectDiv = document.querySelector('.div__container');
const addButton = document.querySelector('.add__button');
const deleteButton = document.querySelector('.delete__button');
const pText = document.createElement('p');

let counter = localStorage.getItem(counter) !== null ? 0 : JSON.stringify(counter); 
addButton.addEventListener('click', e => {
    counter++;
    sessionStorage.setItem('counter', JSON.stringify(counter));
    pText.textContent = counter;
    selectDiv.appendChild(pText);
})

deleteButton.addEventListener('click', e => {
    counter--;
    sessionStorage.setItem(JSON.stringify(counter));
    pText.textContent = counter;
    selectDiv.appendChild(pText);
})

