const textDOM = document.createElement('p');
textDOM.textContent = 'Axel Presidente';
textDOM.classList.add('text--active'); 

document.body.appendChild(textDOM);

// Recuperar todos los li de la página
console.log(document.querySelectorAll('li'));

// Recuperar todos los elementos con clase "item"
console.log(document.querySelectorAll('.item'));

// Recuperar el elemento con id="CUARTO_ELEMENTO"
console.log(document.getElementById('CUARTO_ELEMENTO'));

// Recuperar los elementos que tengan atributo  data-demo
console.log(document.querySelectorAll('[data-demo´]'));

// Cambiar el texto de todos los elementos  que tengan la clase "special" a "Special cambiado"
const specialListDOM = document.querySelectorAll('.special');
specialListDOM.forEach(e=> e.textContent = 'Special Cambiado');

// Cambiar el tamaño de letra como estilo en linea de los elemento con atributo  data-demo="Atributo Custom"
const dataDemoListDOM = document.querySelectorAll('[data-demo="Atributo Custom"]');
dataDemoListDOM.forEach(e => e.style='font-size:48px;');

// Crear un li que tenga un id="CREADO_CUSTOM" y añadirlo como último hijo del ul
const itemLi = document.createElement('li');
itemLi.id = 'CREADO_CUSTOM';
const listContainerDOM =  document.querySelector('.container');
listContainerDOM.appendChild(itemLi);

// Cambiar el tamaño de letra como estilo en linea de los elemento con atributo  data-demo="Atributo Custom"
const elementFontSizeDOM = document.querySelector('[data-demo="Atributo Custom"]');
elementFontSizeDOM.style='font-size:20px;';

// Crear un li que tenga un id="CREADO_CUSTOM" y añadirlo como último hijo del ul

const newLi = document.createElement('li');
newLi.id = "CREADO_CUSTOM";
const contenedorLi = document.querySelector('.container')
contenedorLi.appendChild(newLi);