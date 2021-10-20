let n1 = parseInt(prompt ('Di un numero'));
let n2 = parseInt(prompt ('di otro numero'));

function multiplica(num1, num2){
    let resultado = 0
   for (let i=0; i<num2; i++){
       resultado = resultado + num1;
   }
return resultado;
}

document.write(multiplica(n1, n2));
