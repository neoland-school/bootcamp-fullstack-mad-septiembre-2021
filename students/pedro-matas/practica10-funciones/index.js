// ejercicio 1

let num1 = parseInt(prompt('introduce el primer operando'));
let num2 = parseInt(prompt('introduce el segundo operando'));

function multiplicar(a, b) {
    return (a * b);
}


document.write(multiplicar(num1, num2));
document.write(`<p></p>`);

// ejercicio 2

let string1 = prompt('introduce una frase');

function concatenar(str, str2) {
    return str + str2;
}

document.write(concatenar('hola', string1));


// ejercicio 3

document.write(`<p></p>`);
let preg1 = prompt('intoduce true o false');
let preg2 = prompt('intoduce true o false');


function booleanos(b1, b2) {
    let bool1;
    let bool2;
    if (preg1 === 'true') {
        bool1 = true;
    } else {
        bool1 = false;
    }

    if (preg2 === 'true') {
        bool2 = true;
    } else {
        bool2 = false;
    }

   if(bool2+bool1===2){
       return true;
   }else{
       return false;
   }
}


document.write(booleanos(preg2,preg1));
document.write(`<p></p>`);

// ejercicio 4

let nasteriscos=parseInt(prompt('cuantos asteriscos quieres niño'));

function asteriscos(a){
    let cadena='';
    for(let i=0;i<a;i++){
        cadena += '*';
    }
    return cadena;
}

document.write(asteriscos(nasteriscos));

// ejercicio 5

let mult1= parseInt(prompt('escribe el primer numero'));
let mult2= parseInt(prompt('escribe el segundo numero'));

function multiplicar(a,b){
    let cont=0;
    let suma=0;
    while(cont<b){
        suma=suma+a;
        cont++;
    }
    return suma;
}

document.write(multiplicar(mult1,mult2));
document.write(`<p></p>`);

// ejercicio 6 no ha salido en mi cabeza era espectacular

let vcapicua=parseInt(prompt('te giro el numero'));

function capicua(num){
    let numcopia=num;
    
    let cont=0;
    let cont2;
    let arraynum=[];
    let arraynumi=[];
    let i=0;
    
    while (numcopia>=1){
        
        numcopia=numcopia/10;
        cont++;
    }
     cont2=cont;
    while(cont>=0){

      arraynum[cont]= Math.trunc((num/(10**(cont-1))));
     
      
       cont--;
    }
    for(i=0;i<cont2;i++){
        arraynumi[i]=arraynum[cont2-1];
        cont2--;
    }
    return arraynumi;
}

document.write(capicua(vcapicua));

document.write(`<p></p>`);


// ejercicio 6.2

// let numReves=prompt('escribe el numero');

// function invertir(numReves) {
//     let lon = numReves.length;
//     let cadenaInvertida = "";
  
//     while (lon>=0) {
//       cadenaInvertida = cadenaInvertida + numReves.charAt(lon);
//       lon--;
//     }
//     return cadenaInvertida;
//   }

//   document.write(invertir(numReves));

// document.write(`<p></p>`);


// ejercicio 7


let numCapi=prompt('escribe el numero');

function numCapicua(numCapi) {
    let lon2 = numCapi.length;
    let cadenaIn = "";
  
    while (lon2>=0) {
        cadenaIn = cadenaIn + numCapi.charAt(lon2);
      lon2--;
    }
    if(cadenaIn===numCapi){
        return 'si es capicua';
    }else{
        return 'no es capicua';
    }
  
  }

  document.write(numCapicua(numCapi));

document.write(`<p></p>`);

// ejercicio 8

function tipoDato(){
    let numero1=0;
    let palabra='a';
    let boleano=true;

  return  typeof(numero1,palabra,boleano);
}

document.write(tipoDato());
document.write(`<p></p>`);

// ejercicio 9

let base=parseInt(prompt('dame la base'));
let altura=parseInt(prompt('dame la altura'));

function arectangulo_cuadrado(a,b){
    return a*b;
}
function prectangulo_cuadrado(a,b){
    return a*2+b*2;
}
document.write(arectangulo_cuadrado(base,altura));
document.write(`<p></p>`);
document.write(prectangulo_cuadrado(base,altura));
document.write(`<p></p>`);

let baset=parseInt(prompt('dame la base'));
let lado=parseInt(prompt('dame el lado'));

function atriangulo(a,b){
    return a*b/2
}
function ptriangulo(a,b){
    return a*2+b;
}
document.write(atriangulo(baset,lado));
document.write(`<p></p>`);
document.write(ptriangulo(baset,lado));
document.write(`<p></p>`);

let radio=parseInt(prompt('dame el radio'));

function acirculo(r){
    return 3.14*r*r;
}
function pcirculo(r){
    return 2*3.14*r;
}

document.write(acirculo(radio));
document.write(`<p></p>`);
document.write(pcirculo(radio));
document.write(`<p></p>`);


// ejercicio 10

let numcalc1=parseInt(prompt('pasame el numero calculo yo'));
let numcalc2=parseInt(prompt('pasame otro numero calculo yo'));

function suma(a,b){
    return a+b;
}

function resta(a,b){
    return a-b;
}

function mult(a,b){
    return a*b;
}

function div(a,b){
    return a/b;
}

function mod(a,b){
    return a%b;
}

document.write(suma(numcalc1,numcalc2));
document.write(`<p></p>`);
document.write(resta(numcalc1,numcalc2));
document.write(`<p></p>`);
document.write(mult(numcalc1,numcalc2));
document.write(`<p></p>`);
document.write(div(numcalc1,numcalc2));
document.write(`<p></p>`);
document.write(mod(numcalc1,numcalc2));
document.write(`<p></p>`);

// ejercicio 11

let url=prompt('introduce la url');

function githubdom(url){
    

    let clave = "github";
    let posicion = url.indexOf(clave);

if( posicion>=0){
    return 'si es del dominio';
}else{
    return 'no es del dominio';
}
}
document.write(githubdom(url));
document.write(`<p></p>`);

// ejercicio 12

let op1=parseInt(prompt('dame el num1'));
let op2=parseInt(prompt('dame el num2'));
let signo=prompt('dame el signo');

function calculadora2(o1,o2,s){
    
    if(s==='+'){
        return o1+o2;
    }else if(s==='-'){
        return o1-o2;
    }else if(s==='*'){
        return o1*o2;
    }else if(s==='/'){
        return o1/o2;
    }else if(s==='%'){
        return o1%o2;
    }
}

document.write(calculadora2(op1,op2,signo));
document.write(`<p></p>`);


// ejercicio 13

let vdni= prompt('introduce el dni');
let letra='';
let cadenaNum='';
let letraDni=['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];

function dni(nif){
    let i=0;
    letra = nif.charAt(nif.length-1);
    letra=letra.toUpperCase();
    cadenaNum=nif.substr(0,8);
   cadenaNum= parseInt(cadenaNum);
   cadenaNum= cadenaNum%23;
   for(i=0; i<cadenaNum;i++){
    
        
    }
    if (letraDni[i]===letra){
        return 'si coincide';
    }else{
        return 'no coincide';
    }

}

document.write(dni(vdni));
document.write(`<p></p>`);
