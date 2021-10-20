'use strict';

// ejercicio 1

let objeto={
    numero:1,
    palabra:'hola',
    verdad:true,
    vacio: null,
    nada: undefined,
    cadena:[1,2,3],
    funcion: (a,b)=>a+b,
    objeto2:{
        numero:2,
        palabra:'casa'
    }

};
console.log(objeto);
console.log(objeto.numero);
console.log(objeto.palabra);
console.log(objeto.verdad);
console.log(objeto.vacio);
console.log(objeto.nada);
console.log(objeto.cadena);
console.log(objeto.funcion(1,2));
console.log(objeto.objeto2);

delete objeto.numero;
delete objeto.palabra;
delete objeto.verdad;
delete objeto.vacio;
delete objeto.nada;
delete objeto.cadena;
delete objeto.funcion();
delete objeto.objeto2;
console.log(objeto);
console.log(objeto.numero);
console.log(objeto.palabra);
console.log(objeto.verdad);
console.log(objeto.vacio);
console.log(objeto.nada);
console.log(objeto.cadena);
console.log(objeto.funcion());
console.log(objeto.objeto2);


// ejercicio 2

let coche={
    marca: 'seat',
    modelo: 'leon',
    matricula: '9993CBN',  
    velocidad: 120, 
    encendido: true,
}

// 3 

let coche1={
    marca: 'seat',
    modelo: 'leon',
    matricula: '9993CBN',  
    velocidad: 120, 
    encendido: true,
};
let coche2={
    marca: 'renault',
    modelo: 'gt',
    matricula: '5393BBN',  
    velocidad: 80, 
    encendido: true,
};
let coche3={
    marca: 'ford',
    modelo: 'fiesta',
    matricula: '2293CBN',  
    velocidad: 0, 
    encendido: false,
};
let coche4={
    marca: 'renault',
    modelo: 'coupe',
    matricula: '3322VVD',  
    velocidad: 150, 
    encendido: true,
};
let arrayCoche=[coche,coche1,coche2,coche3,coche4];

// 4

console.log(coche3.velocidad);

// 5 

function marca(arrayCoches){
    let nuevoarray=[];
    let marca=prompt('dime la marca');

    for(let i=0;i<arrayCoches.length;i++){
        if(marca===arrayCoches[i].marca){
            nuevoarray.push(arrayCoches[i]);
        }
    }
    return nuevoarray;
}

console.log(marca(arrayCoche));

// 6

function operativo(arrayCoches){
    for(let i=0;i<arrayCoches.length;i++){
        if(arrayCoches[i].encendido){
            return true;
        }
    }
    
}

console.log(operativo(arrayCoche));

// 7

function media(arrayCoches){
    let velocidad=0;
    let i=0;
    for(i=0;i<arrayCoches.length;i++){
        velocidad=arrayCoches[i].velocidad+velocidad;
    }
    velocidad=velocidad/i;
    return velocidad
}

console.log(media(arrayCoche));

// 8

let bidimensional=[[1,2,3,4,5,6,7,8],[1,2,3,4,5,6,7,8]];

function diagonal(arrayBi){
    let nuevoarray=[];
    for(let i=0;i<arrayBi.length;i++){
        for(let j=0;j<arrayBi[i].length;j++){
           nuevoarray= arrayBi[i,i];
        }
    }
    return nuevoarray;
}

console.log(diagonal(bidimensional));