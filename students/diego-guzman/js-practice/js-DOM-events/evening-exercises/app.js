const checkPrevResult = localStorage.getItem('result');
const submitButton = document.getElementById('submit__button');
const nameInput = document.getElementById('name__input');
const ageInput = document.getElementById('age__input');
const hobbyInput = document.getElementById('hobby__input');

submitButton.addEventListener('click', e => {

    //elimino el comportamiento por defecto de los formularios
    //esto evita que se produzca la redireccion a donde diga el action del form
    e.preventDefault()

    if(nameInput.value && ageInput.value && hobbyInput.value !== null){ //solo si se cumplen las tres condiciones

    localStorage.setItem('nameInput', JSON.stringify(nameInput.value));
    localStorage.setItem('ageInput', JSON.stringify(ageInput.value));
    localStorage.setItem('hobbyInput', JSON.stringify(hobbyInput.value));
    }
});

function storedValues (age, name, hobby) {

    const pNameDOM= document.createElement('p');
    pNameDom.textContent= `El último nombre introducido es: ${name}`;
    const pAgeDOM= document.createElement('p');
    pAgeDom.textContent= `La última edad introducida es: ${age}`;
    const pHobbyDOM= document.createElement('p');
    pHobbyDom.textContent= `El último hobby introducido es ${hobby}`;
    
    const infoContainer = document.querySelector('.div__container');
    infoContainer.innerHTML='';
    infoContainer.appendChild(pNameDOM);
    infoContainer.appendChild(pAgeDOM);
    infoContainer.appendChild(pHobbyDOM);
}

if(localStorage.getItem('nameInput')!== null){
    const storedNameValue = JSON.parse(sessionStorage.getItem('nameInput'));
    const storedAgeValue = JSON.parse(sessionStorage.getItem('ageInput'));
    const storedHobbyValue = JSON.parse(sessionStorage.getItem('hobbyInput'));
    updateDOMStats(nameInput, ageInput, hobbyInput);

}



// function updateDOMStats(name, age, hobby){
//     //esta funcion se encarga de actualizar el DOM con los valores del formulario
//     const pNameDOM = document.createElement('p');
//     pNameDOM.textContent = `El último nombre introducido es: $(name)`;
    
//     const pAgeDOM = document.createElement('p');
//     pAgeDOM.textContent = `La última edad introducida es: $(age)`;
    
//     const pHobbyDOM = document.createElement('p');
//     pHobbyDOM.textContent = `El último hobby introducido es: $(hobby)`;
    
//     const containerDOM = document.querySelector('[data-info-container]');
//     containerDOM.innerHTML=''; //al dejarlo vacío limpiamos todos los hijos
//     containerDOM.appendChild(pNameDOM);
//     containerDOM.appendChild(pAgeDOM);
//     containerDOM.appendChild(pHobbyDOM);
// }

// if(sessionStorage.getItem('age')!== null){
//     const storedNameValue = JSON.parse(sessionStorage.getItem('name'));
//     const storedAgeValue = JSON.parse(sessionStorage.getItem('age'));
//     const storedHobbyValue = JSON.parse(sessionStorage.getItem('hobby'));
//     updateDOMStats(name, age, hobby);

// }


// submitButton.addEventListener('click', e => {
// e.preventDefault();

// const formElement = e.target;
// const inputName = formElement.name; 
// sessionStorage.setItem('name', JSON.stringify(inputName.value));

// const inputAge = formElement.age;
// sessionStorage.setItem('age', JSON.stringify(inputAge.value));

// const inputHobby = formElement.hobby;
// sessionStorage.setItem('hobby', JSON.stringify(inputHobby.value));
// updateDOMStats(inputName.value, inputAge.value, inputHobby.value);

// });
