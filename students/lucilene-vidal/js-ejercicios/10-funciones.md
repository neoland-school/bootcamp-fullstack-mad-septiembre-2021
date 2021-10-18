*FUNCIONES*

// EJERCICIO 1 - MULTIPLICACIÓN

function producto(a,b){
  return a*b;
}
document.write("4 x 3 = " + producto(4,3));



// EJERCICIO 2 - concatena "Hola" a un string de entrada por prompt. Mostrar navegador


function myFunction(){
let a = prompt('dime una palabra');
alert("Hola" + a);
return;
}

myFunction();



// EJERCICIO 3 - funcion que dados dos booleanos devuelva el AND de estos. (Usar el método que enseñó Alex para // convertir a booleano un string)





// EJERCICIO 4 - funcion que devuelva tantos asteriscos como indique el parametro de entrada


const num = parseInt(prompt('Escribe un numero'));
let count = '';

function convierte(asterisco){
   for (let i=0; i<asterisco; i++){
   count = count + '*';
  }
  return count;
}
document.write (convierte(num));


// EJERCICIO 5 - FUNCION QUE MULTIPLIQUE DOS NUMEROS SIN USAR EL OPERADOR *

function multiply(num,toNum){
  let product = 0;
  for(let i = 1; i <= toNum; i++){
    product += num;
  }

  return product;
}

console.log(multiply(2,5)); 


// EJERCICIO 6 - Escribir una función que dado un numero, devuelva el número al revés (EJ: 3456 => 6543)


const number = prompt('ingrese un número aquí');

function reverseNumber(n){
  const convertAndReverse = n.toString().split('').reverse().join('')
  return Number(convertAndReverse)
}

reverseNumber(number) 









