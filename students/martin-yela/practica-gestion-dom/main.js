// 1- Crear un documento HTML con un body vacio. Con JS crear un p con el texto Axel Presidente en color verde que lo proporcione una clase CSS.

const newP = document.createElement('p');
newP.setAttribute('style', 'color:green');
newP.textContent = 'Axel presidente';

document.querySelector('body').appendChild(newP);

// Recuperar todos los li de la página
// Recuperar todos los elementos con clase "item"
// Recuperar el elemento con id="CUARTO_ELEMENTO"
// Recuperar los elementos que tengan atributo  data-demo
// Cambiar el texto de todos los elementos  que tengan la clase "special" a "Special cambiado"
// Cambiar el tamaño de letra como estilo en linea de los elemento con atributo  data-demo="Atributo Custom"
// Crear un li que tenga un id="CREADO_CUSTOM" y añadirlo como último hijo del ul


const elemLi = document.querySelectorAll('li');
console.log(elemLi);
const elemItem = document.querySelectorAll('.item');
console.log(elemItem);
// const elemID = document.querySelectorAll('#CUARTO_ELEMENTO');
const elemID = document.getElementById('CUARTO_ELEMENTO');
console.log(elemID);
const elemAtributo = document.querySelectorAll('[data-demo]');
console.log(elemAtributo);


document.querySelectorAll('.special').forEach(element => element.textContent = 'Special cambiado');
document.querySelectorAll('[data-demo="Atributo Custom"]').forEach(v => v.style='font-size:50px;');
const newLi = document.createElement('li');
newLi.id= 'CREADO_CUSTOM';
// newLi.classList.add('el-nombre');    PARA AGREGAR UN NOMBRE DE UNA CLASE

const listContainer = document.querySelector('.container');
newLi.textContent = 'LI AÑADIDO';
listContainer.appendChild(newLi);