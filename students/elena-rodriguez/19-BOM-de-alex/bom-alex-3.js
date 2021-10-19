//Recuperar el elemento con el id= "CUARTO_ELEMENTO"

const recuId = document.getElementById('CUARTO_ELEMENTO');
console.log(recuId);


//Recuperar los elementos que tengan atributo  data-demo

const recuAtri = document.querySelectorAll('[data-demo]');
console.log(recuAtri);


//Cambiar el texto de todos los elementos  que tengan la clase "special" a "Special cambiado"
const cambioText = document.querySelectorAll('.special');
cambioText.textContent = "Special cambiado";
console.log(cambioText)




//Cambiar el tamaño de letra como estilo en linea de los elemento con atributo  data-demo="Atributo Custom"
const cambioStylos = document.querySelector('[data-demo="Atributo Custom"]');
cambioStylos.style = "font-size: 3em";



//Crear un li que tenga un id="CREADO_CUSTOM" y añadirlo como último hijo del ul

const creoLi = document.createElement('li');
 



//Recuperar todos los elementos con clase "item"
const recuClasItem = document.querySelectorAll('.item');
console.log(recuClasItem);
