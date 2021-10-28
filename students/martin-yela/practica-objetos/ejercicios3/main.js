// 1- Escribe una función que dado un string con una hora (EJ: 14:36:57) devuelva un objeto con las 
// propiedades de hora, minutos y segundos del string

let hora = '14:36:57';

function objHora(hor){
    let hs = hor.charAt(0) + hor.charAt(1);
    let minut = hor.charAt(3) + hor.charAt(4);
    let seg = hor.charAt(6) + hor.charAt(7);
    let obj = {
        hora: parseInt(hs),
        minutos: parseInt(minut),
        segundos: seg,
    };
    return obj;
}
console.log(objHora(hora));


// 2- Escribe una función que dado un objeto y un string que representa el nombre de la propiedad de ese objeto, devuelva el valor de esa propiedad

function darProp(obj, words) {
    return obj[words];
}

console.log(darProp(objHora(hora), 'minutos'));


// 3- Escribe una función que dado un objeto y un string que representa el nombre de la propiedad de ese objeto, elimine esa propiedad del objeto

function quitarProp(obj, words) {
    delete obj[words];
}









// 4- Escribe una función que imprima por pantalla el `nombre:valor` de cada propiedad de un objeto 
//  encapsulando cada propiedad por ()
// 5- Escribe una función que dado un array de objetos "producto", que contiene (id, nombre, tipo y precio), 
// devuelva el precio total de todos los productos
// 6- Escribe una función que dado un array de objetos "producto", que contiene (id, nombre, tipo y precio), 
// devuelva cuantos tipos de producto existen