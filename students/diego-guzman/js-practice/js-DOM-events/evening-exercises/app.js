const checkPrevResult = localStorage.getItem('result');

const submitButton = document.getElementById('submit__button');
const nameInput = document.getElementById('name__input');
const ageInput = document.getElementById('age__input');
const hobbyInput = document.getElementById('hobby__input');

submitButton.addEventListener('click', e => {
    if(nameInput.value && )

    localStorage.setItem('nameInput', JSON.stringify(nameInput.value));
    localStorage.setItem('ageInput', JSON.stringify(ageInput.value));
    localStorage.setItem('hobbyInput', JSON.stringify(hobbyInput.value));
});