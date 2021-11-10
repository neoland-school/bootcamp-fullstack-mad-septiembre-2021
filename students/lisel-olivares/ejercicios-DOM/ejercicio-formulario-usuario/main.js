/*1. Crear una aplicación que presente un formulario donde se solicite:
	-nombre
	-edad
	-hobby

	Al pulsar el botón, debe guardarse dicha información en memoria.

	Al refrescar el navegador, si existe información en memoria (se ha hecho click previamente)debe mostrarse dicha información debajo del formulario, en caso que el usuario vuelva a introducir información y pulsar el botón, debemos actualizar los datos en memoria y mostrar los datos actualizados */

function updateDOMstarts(name, age, hobbie){
    //esta funcion se encarga de actualizar el DOM con los valores del formulario
    const pNameDOM = document.createElement('p');
    pNameDOM.textContent = `El último nombre introducido es: ${Name}`

    const pAgeDOM = document.createElement('p');
    pAgeDOM.textContent = `La última edad introducida es: ${Age}`

    const pHobbieDOM = document.createElement('p');
    pHobbieDOM.textContent = `El último hobbie introducido es: ${Hobbie}`

    const containerDOM = document.querySelector('[data-info-container]');
    containerDOM.innerHTML = ''; // limpiamos todos los hijos
    containerDOM.appendChild(pNameDOM);
    containerDOM.appendChild(pAgeDOM);
    containerDOM.appendChild(pHobbieDOM);
}

// Inicializo con la info del sessionStorage
if(sessionStorage.getItem('age') !== null){
    const storesNamedValue = JSON.parse(sessionStorage.getItem('name'));
    const storesNamedValue = JSON.parse(sessionStorage.getItem('age'));
    const storesNamedValue = JSON.parse(sessionStorage.getItem('hobbie'));
}

document.querySelector('.form__container').addEventListener('submit', e =>{
    // elimino el comportamiento por defecto de los formularios.
    // Esto evita que se produzca la redireccion a donde diga el action del form
    e.preventDefault(); // para cancela el funcionamiento y que no se envie la info
    const formElement = e.target; // tengo el nodo formulario
    const inputName = formElement.name; // obtengo el input del formulario cuyo atributo name es igual a 'name
    sessionStorage.setItem('name', JSON.stringify(inputName.value)); // guardo en el session el valor del input

    const inputAge = formElement.age; // obtengo el input del formulario cuyo atributo name es igual a 'name
    sessionStorage.setItem('age', JSON.stringify(inputAge.value)); // guardo en el session el valor del input

    const inputHobbie = formElement.hobbie; // obtengo el input del formulario cuyo atributo name es igual a 'name
    sessionStorage.setItem('hobbie', JSON.stringify(inputHobbie.value)); // guardo en el session el valor del input

    updateDOMstarts(inputName.value, inputAge.value, inputHobbie.value);
});
