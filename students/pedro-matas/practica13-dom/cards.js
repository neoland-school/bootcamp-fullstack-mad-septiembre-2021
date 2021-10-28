const container = document.createElement('article');
container.classList.add = 'container'; // creacion contenedor general

let cuerpo=document.body;

cuerpo.appendChild(container);//meto el contenedor en el body

let container__img__label= document.createElement('div');// creacion del contenedor de la imagen y la label
container.classList.add='container__img__label';

container.appendChild(container__img__label);// meto el container en el general


let imagen=document.createElement('img');// creacion imagen
imagen.setAttribute("src","https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/restaurantes-de-moda-madrid-1619774290.jpg?crop=0.539xw:0.807xh;0.300xw,0.122xh&resize=640:*")
imagen.classList.add('container__img');

container__img__label.appendChild(imagen);

let textoImagen=document.createElement('h2');
textoImagen.classList.add('container__img__label-texto');
textoImagen.textContent='España';
container__img__label.appendChild(textoImagen);

let tituloMedio=document.createElement('h3');
tituloMedio.textContent='Madrid';
container.appendChild(tituloMedio);

let descripcion=document.createElement('p');
descripcion.textContent='aqui tranquilo no se esta';
container.appendChild(descripcion);

let latitud=document.createElement('p');
latitud.textContent='40°30′N';
container.appendChild(latitud);

let altitud=document.createElement('p');
altitud.textContent='3°40′O';
container.appendChild(altitud);


