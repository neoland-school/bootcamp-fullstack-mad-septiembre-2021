// 3.- Escribir un programa en NodeJs que reciba 3 parámetros de entrada. 
// Los dos primeros serán números y el tercero un string que puede ser "suma", "resta", "multiplica" o "divide". 
// Dependiendo del valor de tercer parámetro el programa realizará la operación correspondiente y mostrara por consola:
// 	"La <opearacion> de <num1> y <num2> es <resultado>"


let input = process.argv.slice(2)

let num_1, num_2, operator;

num_1 = parseInt(input[0]);
num_2 = parseInt(input[1])
operator = input[2];


switch(operator.toLowerCase()){

    case 'suma': result = (num_1 + num_2);
    process.stdout.write(`La ${operator.toLowerCase()} de ${num_1} y ${num_2} es ${result.toString()} \n`); break;

    case 'resta': result = (num_1 - num_2);
    process.stdout.write(`La ${operator.toLowerCase()} de ${num_1} y ${num_2} es ${result.toString()} \n`); break;

    case 'multiplica': result = (num_1 * num_2);
    process.stdout.write(`La multiplicación de ${num_1} y ${num_2} es ${result.toString()} \n`); break;

    case 'divide': result = (num_1 / num_2);
    process.stdout.write(`La división de ${num_1} y ${num_2} es ${result.toString()} \n`); break;

    case 'exit': process.exit();break;

}