// 3.- Escribir un programa en NodeJs que reciba 3 parámetros de entrada. Los dos primeros serán números y el tercero un string que puede ser "suma", "resta", "multiplica" o "divide". Dependiendo del valor de tercer parámetro el programa realizará la operación correspondiente y mostrara por consola:
// 	"La <operacion> de <num1> y <num2> es <resultado>"
const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);
const operacion = process.argv[4];
let result = 0;

switch (operacion){
    case 'suma':    result = num1 + num2; 
                    break;
    case 'resta': result = num1 - num2; break;
    case 'multiplica': result = num1 * num2; break;
    case 'divide': result = num1 / num2; break;
}
process.stdout.write(`La ${operacion} de ${num1} y ${num2} es ${result}`)