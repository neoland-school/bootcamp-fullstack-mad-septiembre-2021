// EJERCICIO 1  el numero mayor de dos 

let numeroUno;
let numeroDos;

numeroUno=parseInt(prompt("Ingrese el numero 1",""));
numeroDos=parseInt(prompt("Ingrese el numero 2",""));

if(numeroUno >= numeroDos)
	{
        //imprime numero mayor
	document.write("El numero mayor es: " + numeroUno + " ( Numero 1 )");
	}
	else
	{
       //imprime numero mayor
	document.write("El numero mayor es : " + numeroDos + " ( Numero 1 )");
	}


// EJERCICIO 2  la mayor frase 


let fraseUno = prompt("Ingrese la primera frase","");
console.log(fraseUno.length);

let fraseDos = prompt("Ingrese la segunda frase","");
console.log(fraseDos.length);


if(fraseUno > fraseDos)
	{
        //imprime frase mayor
	document.write("La frase mayor es: " + fraseUno + " ( Frase 1 )");
	}
	else
	{
  
	document.write("La frase mayor es : " + fraseDos + " ( Frase 2 )");
	}


// EJERCICIO 3  par e impar

const number = parseInt(prompt ('Introduce un numero'));
for (let i = 0; i <= number; i++){
    if (i%2===0){
        document.write (`${i} es par`);
    }else {
        document.write (`${i} es impar`);
    }
}



// EJERCICIO 4 numero par e impar 


for(let i=1; i<100; i++){ 
if(i % 3 == 0 && i % 5 == 0) {

    console.log("Si, el número " + i + " es múltiplo de 5 y 3 FizzBuzz");

} else if (i % 3 == 0) { 
    console.log("Si, el número " + i + " es múltiplo de 3 Fizz");

} else if (i % 5 == 0)  {
    console.log("Si, el número " + i + " es múltiplo 5 Buzz");

} else {
    console.log("No, el número " + i + " no es múltiplo de 5");
}
}


// EJERCICIO 5 patrones con * SIN CONCLUIR

let simbol = ""; 

for (i = 0; i <= 5; i++) {
  simbol += "<p>";
for (j = 0; j <= i; j++) {
  simbol += "*";
  }
  simbol += "</p>";
}
for (i = 4; i > 0; i--) {
  simbol + "<p>";
for (e = i; e > 0; e--) {
  simbol += "*";
  }
  simbol += "</p>";
}
 document.write(simbol);




