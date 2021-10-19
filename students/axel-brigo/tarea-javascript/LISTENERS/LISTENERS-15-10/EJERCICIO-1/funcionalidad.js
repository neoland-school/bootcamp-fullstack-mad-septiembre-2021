// 1- Crear un HTML que tenga un formulario con un input y un botón.
// Cuando se pulse el botón deberá ir añadiendo lo que se ha escrito 
//en una lista no ordenada debajo




document.querySelector('.form__container').addEventListener('submit', e => {
    e.preventDefault();
    const formElement = e.target;  // selecciono el formulario 
    const inputValue = formElement.name.value; // agarro el valor del input

    const ueleHtml = document.getElementById('uele'); // traigo el Ul al javascript
    const elLi = document.createElement('li'); // creo el li
    elLi.textContent = inputValue; // agrego el valor del input adentro del li
    ueleHtml.appendChild(elLi); // meto el LI en el ul




})

