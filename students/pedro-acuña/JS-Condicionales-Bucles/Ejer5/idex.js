let fibonacci =0;
let fibonacci1 = 0;
let fibonacci2 = 1;

let valor = parseInt(prompt('Introduce un numero para averiguar su secuencia'));
while(fibonacci< valor){

    document.write(`${fibonacci} `);
    fibonacci = fibonacci + fibonacci1 ;
    fibonacci1 = fibonacci2;
    fibonacci2 = fibonacci;
   
    
}