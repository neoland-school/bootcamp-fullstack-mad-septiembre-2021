// practica 1

let num = parseInt(prompt('escribe le primer numero'));
let num2= parseInt(prompt('escribe el segundo numero'));

if(num>num2){
    document.write(`${num} es mayor que ${num2}`);

}else{
    document.write(`${num2} es mayor que ${num} `);
}


//practica2

let frase1 = prompt('escribe la primera frase').length;
let frase2 = prompt('escribe la segunda frase').length;

if(frase1>frase2){
    document.write(`la primera frase es mayor que segunda`);

}else{
    document.write(`la segunda frase es mas larga que la segunda `);
}

// practica 3

let numero=parseInt(prompt('escribe el numero limitante'));

for(let i=0;i<=numero;i++){
    
    if(i%2===0){
        document.write(`${i} es par `);
    }else{
        document.write(`${i} es impar `);
    }
    
    i++;
}


// practica 4

let numeromult=1;

while(numeromult<=100){

    if ((numeromult%3===0)&&(numeromult%5===0)) {
        document.write(`${numeromult}<p>fizzbuzz</p>`);
    } else if(numeromult%3===0) {
        document.write(`${numeromult}<p>fizz</p>`);
    }else if(numeromult%5===0){
        document.write(`${numeromult}<p>buzz</p>`);
    }else{
        document.write(`${numeromult} <p>no es multiplo ni de 3 ni de 5</p>`);
    }
    numeromult++;
}




// ejercicio 5


let ver=0;
let h=0;
let cont=0;
let contn=0;
let w=9;
while(ver<=9){

    if(contn>=5){
         while(w-contn>0){
            document.write(`*`);
            w--;
         }
         w=9;
    }else{
        while(cont<=h){
        document.write(`*`);
       
        cont++;
        
        }
    }

   
    document.write(`<p></p>`);
    contn++;
    cont=0;
    h++;
    ver++;
}

// ejercicio 6

let fibo1=0;
let fibo2=1;
let fibo3=0;


let numf=parseInt(prompt('introduce el limite'));

document.write('0,1');
while(fibo3<numf){
    fibo3=fibo1+fibo2;
    fibo1=fibo2;
    fibo2=fibo3;
    document.write(`,${fibo3}`);
}

// ejercicio 7

let filas=parseInt(prompt('introduce el numero de filas'));
let columnas=parseInt(prompt('introduce el numero de columnas'));
let fcont=0;
let pcont=0;

document.write(`<p></p>`);
for(pcont=0;pcont<filas;pcont++){
    document.write(`_  _`);
}


for(let c=0;c<columnas;c++){
    document.write(`<p></p>`);
    for(let f=0;f<filas;f++,cont++){
        if(fcont=filas){
        document.write(`|__|`);
        }else{
            document.write(`|__`);
        }
    }

    
}

// ejercicio 6.2




let anum=parseInt(prompt('numerofibo'));
let  myList=[0,1];
let ficont=0;
while(anum>myList[myList.length-1]){
    myList[myList.length]= myList[myList.length-1]+ myList[myList.length-2];
    
}
document.write(myList);

