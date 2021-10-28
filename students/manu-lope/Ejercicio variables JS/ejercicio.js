/* 1.-Solicitar al usuario dos variables numéricas (usando prompt) y realizar su suma, 
resta multiplicación y division. Mostrar los resultados en pantalla, 
maquetando con flexbox debemos ver la operación ( los numeros y el operador ) 
y seguidos de un símbolo '=' el resultado.

2.-Solicitar al usuario dos variables de tipo string y mostrarlas concatenadas por pantalla.

3.-Ejercicio que pida al usuario los grados Celsius (X) e imprima por pantalla sus correspondientes grados Farenheit del siguiente modo "X ºC son YºF"

4.-Imprimir la longitud del string resultante del ejercicio 2. (Este requiere investigación).

5.- Volver al ejercicio 1 y mostrar por consola el tipo de datos de la variable numerica solicitada por prompt antes de ser parseada y después del parseo. */

// PRIMER ENUNCIADO

// let userEntrada1 = prompt('Introduce un número');
// let userEntrada2 = prompt('Dame otro más')
// let toNumberEntrada1 = parseFloat(userEntrada1);
// let toNumberEntrada2 = parseFloat (userEntrada2);

// let resultadoSuma = toNumberEntrada1+toNumberEntrada2;
// let resultadoResta = toNumberEntrada1-toNumberEntrada2;
// let resultadoMulti = toNumberEntrada1*toNumberEntrada2;
// let resultadoDivide = toNumberEntrada1/toNumberEntrada2;

// document.write('<div class="div__style"><p>' + resultadoSuma + '</p></div>');
// document.write('<div class="div__style"><p>' + resultadoResta + '</p></div>');
// document.write('<div class="div__style"><p>' + resultadoMulti + '</p></div>');
// document.write('<div class="div__style"><p>' + resultadoDivide + '</p></div>');


// SEGUNDO ENUNCIADO

// let userString1 = prompt('Introduce texto');
// let userString2 = prompt('Otro poco más');

// let stringFinal = userString1+userString2;

// document.write('<body class="body__style"></body><div class="div__style"><p class="p__style">' + stringFinal + '</p></div></body>');

//TERCER ENUNCIADO

// let grados = prompt('Introduce la temperatura en grados centígrados');
// let number = parseFloat(grados)
// let toFh = (number *1.8) + 32;

// document.write('<div class="div__style"><p class="p__style">' + number + 'ºC son '  + toFh + 'F </p></div>');


//CUARTO ENUNCIADO

// let userString1 = prompt('Introduce texto');
// let userString2 = prompt('Otro poco más');

// let stringFinal = userString1+userString2;
// let resultado = stringFinal.length;

// document.write('<body class="body__style"></body><div class="div__style"><p class="p__style">' + resultado + '</p></div></body>');

// QUINTO ENUNCIADO

// let userEntrada1 = prompt('Introduce un número');
// let userEntrada2 = prompt('Pon otro más')
// console.log(typeof userEntrada1);
// console.log(typeof userEntrada2);
// let toNumberEntrada1 = parseFloat(userEntrada1);
// let toNumberEntrada2 = parseFloat (userEntrada2);
// console.log(typeof toNumberEntrada1);
// console.log(typeof toNumberEntrada2);

// let resultadoSuma = toNumberEntrada1+toNumberEntrada2;
// let resultadoResta = toNumberEntrada1-toNumberEntrada2;
// let resultadoMulti = toNumberEntrada1*toNumberEntrada2;
// let resultadoDivide = toNumberEntrada1/toNumberEntrada2;

// document.write('<div class="div__style"><p class="p__style">' + resultadoSuma + '</p></div>');
// document.write('<div class="div__style"><p class="p__style">' + resultadoResta + '</p></div>');
// document.write('<div class="div__style"><p class="p__style">' + resultadoMulti + '</p></div>');
// document.write('<div class="div__style"><p class="p__style">' + resultadoDivide + '</p></div>');