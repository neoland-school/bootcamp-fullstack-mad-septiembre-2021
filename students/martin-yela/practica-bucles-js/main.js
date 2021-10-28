// for (let i =1; i<=100;i++){
//     document.write(`<h1>${i}</h1>`);
// }

// for (let i=1; i<=100;i=i+2){
//     document.write(`<h1> ${i}<h1>`);
// }

// for (let i=1; i<=1974;i=i+2){
//     document.write(`<h1> ${i}<h1>`);
// }


const FRASE = prompt(`Dime una frase`);
let imprimir = "";
if (imprimir !== null){
    for (let i= 0; i<FRASE.length;i++){
        imprimir += '<li>' + FRASE.charAt(i) + '</li>';
    }
}
document.write('<ul>'+ imprimir + '</ul>');