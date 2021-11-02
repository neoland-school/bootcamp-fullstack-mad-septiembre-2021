let ciudad={
    nombre: 'madrid',
    descripcion:'pues aqui ne encuentro yo tranquilote ',
    pais: 'españa',
    imagen: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/restaurantes-de-moda-madrid-1619774290.jpg?crop=0.539xw:0.807xh;0.300xw,0.122xh&resize=640:*',
    coordenadas:{
        latitud:'40°30′N',
        longitud: '3°40′O'
    },
}

let ciudadMadrid={
    nombre: 'madrid',
    descripcion:'pues aqui ne encuentro yo tranquilote ',
    pais: 'españa',
    imagen: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/restaurantes-de-moda-madrid-1619774290.jpg?crop=0.539xw:0.807xh;0.300xw,0.122xh&resize=640:*',
    coordenadas:{
        latitud:'40°30′N',
        longitud: '3°40′O'
    },
}


let ciudadArgentina={
    nombre: 'buenos aires',
    descripcion:'aqui les gusta maradona',
    pais: 'argentina',
    imagen: 'https://www.lavanguardia.com/files/image_449_465/uploads/2018/10/04/5fa448dddd53f.jpeg',
    coordenadas:{
        latitud:'34° 36',
        longitud: '58° 26'
    },
}
let ciudadFrancia={
    nombre: 'paris',
    descripcion:'aqui duermen las barras de pan ',
    pais: 'francia',
    imagen: 'https://i1.wp.com/hipertextual.com/wp-content/uploads/2013/04/Paris.jpg?fit=1024%2C685&ssl=1',
    coordenadas:{
        latitud:'48º 51 23 N',
        longitud: '2º 21 7 E'
    },
}


//ejercicio 5
// function ciudades(ciudadObject){
//     const container = document.createElement('article');
// container.classList.add('container'); // creacion contenedor general

// let cuerpo=document.body;



// // let container__img__label= document.createElement('div');// creacion del contenedor de la imagen y la label
// // container.classList.add('container__img__label');




// let imagen=document.createElement('img');// creacion imagen
// imagen.setAttribute("src",ciudadObject.imagen);
// imagen.classList.add('container__img');

// container.appendChild(imagen);

// let textoImagen=document.createElement('h2');
// textoImagen.classList.add('container__img__label-texto');
// textoImagen.textContent=ciudadObject.pais;
// container.appendChild(textoImagen);

// // container.appendChild(container__img__label);// meto el container en el general

// let tituloMedio=document.createElement('h3');
// tituloMedio.textContent=ciudadObject.nombre;
// container.appendChild(tituloMedio);

// let descripcion=document.createElement('p');
// descripcion.textContent=ciudadObject.descripcion;
// container.appendChild(descripcion);

// let latitud=document.createElement('p');
// latitud.textContent=ciudadObject.coordenadas.latitud;
// container.appendChild(latitud);

// let altitud=document.createElement('p');
// altitud.textContent=ciudadObject.coordenadas.longitud;
// container.appendChild(altitud);

// cuerpo.appendChild(container);//meto el contenedor en el body



// }

// ciudades(ciudad);

let arrayCiudades=[ciudadArgentina,ciudadMadrid,ciudadFrancia];

function ciudades(ciudadArray){

    
    for(let i=0;i<ciudadArray.length;i++){
        const container = document.createElement('article');
        container.classList.add('container'); // creacion contenedor general
        
        let cuerpo=document.body;
        
        
        
        // let container__img__label= document.createElement('div');// creacion del contenedor de la imagen y la label
        // container.classList.add('container__img__label');
        
        
        
        
        let imagen=document.createElement('img');// creacion imagen
        imagen.setAttribute("src",ciudadArray[i].imagen);
        imagen.classList.add('container__img');
        
        container.appendChild(imagen);
        
        let textoImagen=document.createElement('h2');
        textoImagen.classList.add('container__img__label-texto');
        textoImagen.textContent=ciudadArray[i].pais;
        container.appendChild(textoImagen);
        
        // container.appendChild(container__img__label);// meto el container en el general
        
        let tituloMedio=document.createElement('h3');
        tituloMedio.textContent=ciudadArray[i].nombre;
        container.appendChild(tituloMedio);
        
        let descripcion=document.createElement('p');
        descripcion.textContent=ciudadArray[i].descripcion;
        container.appendChild(descripcion);
        
        let latitud=document.createElement('p');
        latitud.textContent=ciudadArray[i].coordenadas.latitud;
        container.appendChild(latitud);
        
        let altitud=document.createElement('p');
        altitud.textContent=ciudadArray[i].coordenadas.longitud;
        container.appendChild(altitud);
        
        cuerpo.appendChild(container);//meto el contenedor en el body
    }


}
ciudades(arrayCiudades);


