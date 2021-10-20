
/*Recuperar todos los li de la página*/
/* const pepinos = document.getElementsByTagName('li');
console.log(pepinos) */

/*Recuperar todos los elementos con clase "item"
const classItem = document.getElementsByClassName('item');
console.log(classItem)*/

/*Recuperar el elemento con id="CUARTO_ELEMENTO"
let elemental = document.getElementById('CUARTO_ELEMENTO');
console.log(elemental)*/

/* Recuperar los elementos que tengan atributo  data-demo 
let atributeishon = document.querySelectorAll('[data-demo]');
console.log(atributeishon)*/

/* Cambiar el texto de todos los elementos  que tengan la clase "special" a "Special cambiado"
let cambiador = document.querySelectorAll('.special');
cambiador.forEach(e => e.textContent = 'special cambiado');
console.log(cambiador)*/

/*Cambiar el tamaño de letra como estilo en linea de los elemento con atributo  data-demo="Atributo Custom" 
let makeBigger = document.querySelectorAll('[data-demo="Atributo Custom"]');
makeBigger.forEach(e => e.style = 'font-size: 48px');*/


/*Crear un li que tenga un id="CREADO_CUSTOM" y añadirlo como último hijo del ul */
/*const itemLi = document.createElement('li');
itemLi.id = 'CREADO_CUSTOM';
const listContainerDOM =  document.querySelector('.container');
listContainerDOM.appendChild(itemLi);

const otherItem = document.createElement('li');
otherItem.id = 'QUINTO_ELEMENTO';
const elContainer = document.querySelector('.container');
elContainer.appendChild(otherItem);


const otherItem2 = document.createElement('li');
otherItem2.id = 'SEXTO_ELEMENTO';
const elContainer2 = document.querySelector('.container');

const seLlamaA = document.createElement('a');
seLlamaA.href = "http://www.google.com";
seLlamaA.innerHTML = "Pagina de google";
elContainer2.appendChild(otherItem2);
otherItem2.appendChild(seLlamaA);*/

const createDiv = document.createElement('div');
const laImg = document.createElement("img");

 laImg.src = "http://www.google.com/intl/en_com/images/logo_plain.png";


createDiv.appendChild(laImg);
document.body.appendChild(createDiv);









/*var a = document.createElement('a');
 var linkText = document.createTextNode("my title text");
  a.appendChild(linkText); 
  a.title = "my title text"; 
  a.href = "http://example.com"; 
  document.body.appendChild(a);

*/














