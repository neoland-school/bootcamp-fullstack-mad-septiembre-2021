// 1.- Escribir un programa en NodeJs que recibirá parámetros de entrada. El programa debe contar cuantos argumentos 
// se han introducido y por salida estándar mostrar: "Input params quantity: <x>"


const input = process.argv.slice(2).length

process.stdout.write(`input params quantity: ${input}`)

