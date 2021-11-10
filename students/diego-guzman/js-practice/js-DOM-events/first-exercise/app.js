// 1- crear un archivo HTML que tenga un div vacío y un boton (añadir). Cada vez que pulse en el botón se debe añadir un p con el texto añadido desde JS dentro del div

const selectDiv = document.querySelector('.div__container');

const selectButton = document.querySelector('.add__button');


selectButton.addEventListener('click', e => {
    const pText = document.createElement('p');
    pText.textContent = 'created with JS';
    selectDiv.appendChild(pText);
})
