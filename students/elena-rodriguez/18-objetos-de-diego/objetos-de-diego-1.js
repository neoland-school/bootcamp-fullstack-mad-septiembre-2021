// 1- Hello World. Crear un objeto que tenga una propiedad de tipo number.
//      Imprimir solo la propiedad por pantalla 
//      Imprimir todo el objeto por pantalla
//      Repetir el proceso pero con propiedades que tengan los tipos de datos string, boolean, null, undefined , array, function, objects. Al terminar utilizar el operador "delete" para borrar la propiedad de cada uno de los objetos creados. Mostrar la propiedad y el objeto por pantalla.



const usuario = {
    nombre: 'Elena',
    numArticulos: 3,
    compraCompletada: false,
    precioArticulos: undefined,
    numIntentos: [5, 6, 9],
    totalArticulos: function (a, b) {
        let suma = a+b;
        return suma
    } 
     
    

}
console.log(usuario.numArticulos)        // imprime solo la propidead numArticulos _3
console.log(usuario)                     //imprime todo el objeto con sus propiedades 
console.log(usuario.totalArticulos())      //para imprimir el resultado de la función y no la función misma hay que decirle que la ejecute con los paréntesis. El resultado es NaN porque no estamos metiendo los parámtros   
console.log(usuario.return)              //da indefined porque estamos preguntando el resultado de una función a la que no le hemos introducido valores.