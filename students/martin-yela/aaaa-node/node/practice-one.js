// 1.- Escribir un programa en NodeJs que recibirá parámetros de entrada. El programa debe contar cuantos argumentos se han introducido y por salida estándar mostrar: "Input params quantity: <x>"

const cantidadParam = process.argv.length;
process.stdout.write(`Hay ${cantidadParam} parámetros de entrada`);
