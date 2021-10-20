const firstDiv = document.createElement('div');
firstDiv.classList.add('div__container');
document.body.appendChild(firstDiv);


const firstP = document.createElement('p');
firstP.classList.add('first__p');
firstP.textContent= 'this is a P';


const firstA = document.createElement('a');
firstA.classList.add('first__a');
firstA.textContent='Click here';
firstA.href = 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a';

const firstUl = document.createElement('ul');
firstUl.classList.add('ul__container');
firstUl.textContent='This is a list'

const liItem = document.createElement('li');
liItem.classList.add('li__item');
liItem.textContent='this is an item';
const liItem2 = document.createElement('li');
liItem2.classList.add('li__item');
liItem2.textContent='this is an item';
const liItem3 = document.createElement('li');
liItem3.classList.add('li__item');
liItem3.textContent='this is an item';

const contenedorDiv = document.querySelector('.div__container');
contenedorDiv.appendChild(firstP);
contenedorDiv.appendChild(firstA);
contenedorDiv.appendChild(firstUl);

const contenedorUl = document.querySelector('.ul__container');
contenedorUl.appendChild(liItem);
contenedorUl.appendChild(liItem2);
contenedorUl.appendChild(liItem3);