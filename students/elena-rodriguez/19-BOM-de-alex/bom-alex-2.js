//2- Crear un documento HTML con una tabla en el body

//Utilizando JS:
//Recuperar todos los li de la página
const listas = document.querySelectorAll(li);

console.log(listas);


//Recuperar el elemento con id="CUARTO_ELEMENTO"

const fourthItem = document.getElementById('CUARTO_ELEMENTO');
console.log(fourthItem);

//Recuperar los elementos que tengan atributo  data-demo
const dataDemoDOM = document.querySelectorAll('[data-demo]');
console.log(dataDemoDOM);

//Cambiar el texto de todos los elementos  que tengan la clase "special" a "Special cambiado"
const specialListDOM = document.querySelectorAll('.special');
specialListDOM.forEach(e => e.textContent='Special Cambiado');

//Cambiar el tamaño de letra como estilo en linea de los elemento con atributo  data-demo="Atributo Custom"
const dataDemoListDOM = document.querySelectorAll('[data-demo="Atributo Custom"]');
dataDemoListDOM.forEach(e => e.style='font-size:48px;');


//Crear un li que tenga un id="CREADO_CUSTOM" y añadirlo como último hijo del ul
const itemLi = document.createElement('li');
itemLi.id = 'CREADO_CUSTOM';
const listContainerDOM =  document.querySelector('.container');
listContainerDOM.appendChild(itemLi); 


//Recuperar todos los elementos con clase "item"
const listItemsDOMClasses = document.querySelectorAll('.item');
console.log(listItemsDOMClasses);











