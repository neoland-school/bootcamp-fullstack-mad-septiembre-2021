// 2.-Escribir un programa en NodeJs que reciba por parámetros
// una cantidad de números (mínimo 2) y mostrara por consola la suma de todos los números.


const input = process.argv.slice(2)
let result=0;

for(let i=0; i<input.length; i++){
    result += parseInt(input[i]) 
    // console.log(parseInt(input[i]))
    // console.log(result)
}

let a = result.toString();
process.stdout.write(a+'\n')
  