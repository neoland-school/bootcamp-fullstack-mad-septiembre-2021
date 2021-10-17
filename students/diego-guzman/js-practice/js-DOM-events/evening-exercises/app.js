const checkPrevResult = localStorage.getItem('result');
const submitButton = document.querySelector('.form__page');

function storedValues(name, age, hobby) {

    const pNameDOM = document.createElement('p');
    pNameDOM.textContent = `El último nombre introducido es: ${name}`;
    const pAgeDOM = document.createElement('p');
    pAgeDOM.textContent = `La última edad introducida es: ${age}`;
    const pHobbyDOM = document.createElement('p');
    pHobbyDOM.textContent = `El último hobby introducido es: ${hobby}`;

    const infoContainer = document.querySelector('.div__container');
    infoContainer.innerHTML = '';
    infoContainer.appendChild(pNameDOM);
    infoContainer.appendChild(pAgeDOM);
    infoContainer.appendChild(pHobbyDOM);
}

if (localStorage.getItem('nameInput') !== null) {
    const storedNameValue = JSON.parse(localStorage.getItem('nameInput'));
    const storedAgeValue = JSON.parse(localStorage.getItem('ageInput'));
    const storedHobbyValue = JSON.parse(localStorage.getItem('hobbyInput'));
    storedValues(storedNameValue, storedAgeValue, storedHobbyValue);

}
submitButton.addEventListener('submit', e => {

    //elimino el comportamiento por defecto de los formularios
    //esto evita que se produzca la redireccion a donde diga el action del form
    e.preventDefault()
    const formElement = e.target;
    const inputName = formElement.name;
    const inputAge = formElement.age;
    const inputHobby = formElement.hobby;
    if (inputName.value && inputAge.value && inputHobby.value !== null) { //solo si se cumplen las tres condiciones
        localStorage.setItem('nameInput', JSON.stringify(inputName.value));
        localStorage.setItem('ageInput', JSON.stringify(inputAge.value));
        localStorage.setItem('hobbyInput', JSON.stringify(inputHobby.value));
        storedValues(inputName.value, inputAge.value, inputHobby.value);
    }
});
