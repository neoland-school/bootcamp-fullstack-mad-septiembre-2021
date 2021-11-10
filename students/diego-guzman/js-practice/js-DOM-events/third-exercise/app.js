// 3. Modificar el ejercicio 2 para que cuando el usuario refresque la página, el p se inicialice con el valor que había dejado antes
const checkPrevResult = localStorage.getItem('result');
const selectDiv = document.querySelector('.div__container');
const addButton = document.querySelector('.add__button');
const deleteButton = document.querySelector('.delete__button');
const pText = document.createElement('p');
let counter = 0;

if (checkPrevResult!== null){
    pText.textContent = checkPrevResult;
    counter = checkPrevResult;
    selectDiv.appendChild(pText);
}
else{
    pText.textContent = 0;
    selectDiv.appendChild(pText);
}


addButton.addEventListener('click', e => {
    counter++;
    pText.textContent = counter;
    selectDiv.appendChild(pText);
    localStorage.setItem('result', JSON.stringify(counter));
})

deleteButton.addEventListener('click', e => {
    counter--;
    pText.textContent = counter;
    selectDiv.appendChild(pText);
    localStorage.setItem('result', JSON.stringify(counter));
})
