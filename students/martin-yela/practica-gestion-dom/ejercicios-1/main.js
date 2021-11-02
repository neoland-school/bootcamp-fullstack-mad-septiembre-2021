// 1- Crear documento HTML con un body vacío.

// 2- Crear un objeto que represente una ciudad y que tenga los siguientes atributos, dandole valor con una ciudad que queráis :
//  	- Nombre
//  	- Description
//  	- Pais
//  	- urlImagen
// 	- coordenadas:
//  		- latitud
//  		- longitud

const cityOne = {
    nombre:'Madrid',
    description: 'Es la capital de España',
    pais: 'España',
    urlImagen: 'https://img.static-af.com/images/meta/IDname/CITY-MAD-1?aspect_ratio=2:1&max_width=1920',
    coordenadas: {
        latitud: '40º 25',
        longitud: '-3.70325 40° 25′ 0″',
    },
}
const citytwo = {
    nombre:'Bs. As.',
    description: 'Capital de Argentina',
    pais: 'Argentina',
    urlImagen: 'https://d1bvpoagx8hqbg.cloudfront.net/originals/mi-buenos-aires-querido-a80509b392885d53d9085dd1d268188f.jpg',
    coordenadas: {
        latitud: '34° 36',
        longitud: '58° 26',
    },
}
const citythree = {
    nombre:'París',
    description: 'Es la capital de Francia',
    pais: 'Francia',
    urlImagen: 'https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?wid=2880&hei=1280&fmt=jpeg&crop=9,336,2699,1200&anchor=1358,936&qlt=75,0&fit=wrap&op_sharpen=0&resMode=sharp2&op_usm=0,0,0,0&iccEmbed=0&printRes=72',
    coordenadas: {
        latitud: '48.8032',
        longitud: '2.3511 48° 48′ 12″',
    },
}

const arrayCiudades =[cityOne, citytwo, citythree];

//  3- Generar un HTML con JS con un formato similar al siguiente, con los datos de la ciudad de la variable del ejercicio anterior

// const divPrincipal = document.createElement('div');
// divPrincipal.classList.add('cards');

// const divImg1 = document.createElement('img');
// const divImg2 = document.createElement('div');

// divImg1.classList.add('imagen');
// divImg2.classList.add('description');


// divImg1.setAttribute("src", "https://img.static-af.com/images/meta/IDname/CITY-MAD-1?aspect_ratio=2:1&max_width=1920");

// const textoo = document.createElement('p');
// textoo.classList.add('textoImg');
// textoo.textContent = cityOne.pais;

// const texto1 = document.createElement('p');
// const texto2 = document.createElement('p');
// const texto3 = document.createElement('p');
// const texto4 = document.createElement('p');

// texto1.textContent = cityOne.nombre;
// texto2.textContent = cityOne.description;
// texto3.textContent = cityOne.coordenadas.latitud;
// texto4.textContent = cityOne.coordenadas.longitud;

// texto1.classList.add('oneText');

// document.querySelector('body').appendChild(divPrincipal);

// divPrincipal.appendChild(divImg1);

// divPrincipal.appendChild(textoo);

// textoo.appendChild(texto1);
// textoo.appendChild(texto2);
// textoo.appendChild(texto3);
// textoo.appendChild(texto4);


//  4- Añadir ese HTML al DOM

//  5- Generar una función que dado una ciudad, devuelva el elemento del DOM de la card para poder añadirlo al DOM de la página


const boton = document.createElement('button');
boton.classList.add('bot');
boton.setAttribute('onclick', 'botonHTML()');
boton.textContent = 'Pintar Cards';
document.querySelector('body').appendChild(boton);


function pintarCard(obj) {

const divPrincipal = document.createElement('div');
divPrincipal.classList.add('cards');

const divImg1 = document.createElement('img');
const divImg2 = document.createElement('div');

divImg1.classList.add('imagen');
divImg2.classList.add('description');


divImg1.setAttribute("src", obj.urlImagen);

const textoo = document.createElement('p');
textoo.classList.add('textoImg');
textoo.textContent = obj.pais;

const texto1 = document.createElement('p');
const texto2 = document.createElement('p');
const texto3 = document.createElement('p');
const texto4 = document.createElement('p');

texto1.textContent = obj.nombre;
texto2.textContent = obj.description;
texto3.textContent = obj.coordenadas.latitud;
texto4.textContent = obj.coordenadas.longitud;

texto1.classList.add('oneText');

document.querySelector('body').appendChild(divPrincipal);

divPrincipal.appendChild(divImg1);

divPrincipal.appendChild(textoo);

textoo.appendChild(texto1);
textoo.appendChild(texto2);
textoo.appendChild(texto3);
textoo.appendChild(texto4);
}

function pintarArray(){
    arrayCiudades.forEach(element => pintarCard(element));
    pintarCard(arr);
}

let contador = 0;

function botonHTML(){
    
        pintarCard(arrayCiudades[contador]);
        contador +=1;
    if (contador >= arrayCiudades.length){
        boton.setAttribute('style', 'display:none;');
    }
}
// pintarArray(arrayCiudades);


//  6- Generar una funcion que dado un array de ciudades, pinte una lista de cards posicionadas por flex.



