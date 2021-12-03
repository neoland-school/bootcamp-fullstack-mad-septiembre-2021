// 2.-Escribir un programa en NodeJs que reciba por parámetros una cantidad de números (mínimo 2) y mostrara por consola la suma de todos los números.

let result = 0;

for (let i=2; i<process.argv.length ;i++){
        result += parseInt(process.argv[i]);
}
process.stdout.write(result.toString())