/*  EJERCICIO 5
-Escriba por pantalla un programa que pinte el siguiente patrón en la consola del navegador: (Hard)
*  
* *  
* * *  
* * * *  
* * * * *  
* * * *  
* * * 
* *
* 
Necesito que el programa sepa que cuando llegue a 5 empiece a descencer hacia 0. Podría hacer un `for` y decirle
que mientras mi variable sea <=5 dibuje un + y sume uno cada vez i++, y que al llegar a 5 dibuje uno menos i--
*/

let filas;
let asteriscos;
let altura = 4
let conjunto= '';

    for(let filas=0; filas<=altura; filas++) {
        conjunto = conjunto + `<p>`
            for (let asteriscos =1; asteriscos<=filas+1; asteriscos++){
                conjunto = conjunto + '*';
            }
        conjunto = conjunto + `</p>`;
    } 
    console.log(conjunto)
    document.write(conjunto)