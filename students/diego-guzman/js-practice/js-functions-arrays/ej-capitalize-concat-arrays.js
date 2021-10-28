// Crear una función que reciba un array de strings y devuelva un array con los strings capitalized
//      ej-> ['gato', 'perro'] -> ['Gato', 'Perro]
//           ['Gato', 'perro'] -> ['Gato', 'Perro]
//           ['gAto', 'peRRo'] -> ['Gato', 'Perro]


const myArray = ['pErrO', 'GaTO','aRAñA']
function firstCapital(arr){
    arr.forEach((v,i,str) => str[i]=str[i].charAt(0).toUpperCase()+str[i].substring(1,v.length).toLowerCase());
    return arr;
}
document.write(firstCapital(myArray))

