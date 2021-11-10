//1- Crear un documento HTML con un body vacio. Con JS crear un p con el texto Axel Presidente en color verde que lo proporcione una clase CSS.
// Creamos una variable parrafoAxel para guardar la información. Después indicamos document.createElement("p");

const parrafoAxel = document.createElement('p');

//le decimos que al párrafo le introduzca el texto
parrafoAxel.textContent = "Axel Presidente";

//ahora tenemos que crear una clase en un archivo css que contenga el atributo color con valor verde, 
//y lo linkamos al html por un lado y después usamos p.classList.add para que lo añada desde JS

//le decimos que añada la clase de CSS con classList.add('con el nombre en string de la clase')
//classList no borra nada es más recomendable que className porque cambia el atributo entero.
parrafoAxel.classList.add('colorV');


//le decimos que lo pinte usando appendChild(del parrafo). 
//No lo pintará si en el html, el enlace de JS está linkado en el head. 
//Es necesario linkarlo dentro del body para que se carge cuando el body ya se haya ejecutado (así existirá el DOM, hasta entonces no existirá
//y no funcionará lo que hagamos en el window del DOM porque no se habrá creado)
document.body.appendChild(parrafoAxel);




