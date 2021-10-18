// EJERCICIO 1

// let objeto= {nombre:"luci",edad:20};
// console.log(objeto.edad); // imprimir en consola solo la edad 
// console.log(objeto); // imprimir en consola todo el objeto 

// Ahora con un string, boolean, null, undefined, array, function, objects
// Al terminar utilizar el operador "delete" para borrar las propiedades anteriormente creadas
// Mostrar la propiedad y el objeto por pantalla

/* let objeto = {
    nombre:"luci",
    edad: function(yearBorn,thisYear){
        return thisYear - yearBorn;
    },

    mascotas: {
        perros: 1,
        gatos: 2
    },

    fuma: false,
    nulo: null,
    indefinido: undefined,
    pasatiempos: ['leer', 'escribir']

}; 
*/

// delete objeto.mascotas; 
// delete objeto.fuma;
// delete objeto.edad;
// delete objeto.nombre;

// Mostrar la propiedad y el objeto por pantalla



// EJERCICIO 2

// Crear objeto: coche con propiedades marca, modelo, matricula, velocidad actual, algo que indique si está encendido o apagado

/*let coche = {
    marca: "mercedes",
    modelo: "claseC",
    matricula: 77885,
    velocidadActual: 120,
    encendido: true,
    apagado: false


}*/

console.log(coche);

// EJERCICIO 3 

// Crear un array de objetos coche



let cocheUno =
    {
    marca: "mercedes",
    modelo: "claseC",
    velocidad: 120,
    encendido: false
    };

let cocheDos = {
    marca: "seat",
    modelo: "ibiza",
    velocidad: 130,
    encendido: true
    };
let cocheTres  = {
    marca: "audi",
    modelo: "a3",
    velocidad: 110,
    encendido: false
    };
let cocheCuatro = {
    marca: "bmv",
    modelo: "serie3",
    velocidad: 120,
    encendido: true
    }

let coches = [cocheUno, cocheDos, cocheTres, cocheCuatro];

// EJERCICIO 4 

// Imprimir por pantalla la velocidad del 4º coche

// console.log(cocheCuatro.velocidad);

// EJERCICIO 5

// Hacer una funcion que devuelva un array con los coches de una marca que se le pasa por parametro

/*function arrayCoches(parametrotrocar){
    let cochesVacio = []; // aqui se añade los coches que coincidan con la marca
    for (let i = 0; i < coches.length; i++){ // aqui va recorriendo el array de los coches
        if (coches[i].marca === parametrotrocar){ // encontrar la marca
            cochesVacio.push(coches[i]); // 'subir' la marca al array
        };
    }
    return cochesVacio;
}
console.log(arrayCoches('mercedes')); */
 

// EJERCICIO 6

// Hacer una funcion que me indique si hay algun coche encendido SIN TERMINAR

/*function cochesEncendidos(parametroEncontrar){
     let cochesVacio = [];
     for (let i = 0; i < coches.length; i++){
         if (coches[i].encendido === parametroEncontrar){
            cochesVacio.push(coches[i]);
         };
     }
     return cochesVacio;
}
console.log(cochesEncendidos('true')); 
*/

// EJERCICIO 7 

// Hacer una funcion que me devuelva la velocidad media de todos los coches

function mediaVelocidad()
{
  //let total=0, res, numDatos, i;
  numDatos =   arguments.length;
  for (i = 0; i< 4; i++)
  {
     total += arguments[i];
  }
  res = 480/4;
  return res; 
}
console.log(res);



