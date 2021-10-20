let textoNombre = prompt("ingresa tu nombre y apellido")
let a = "Hola "
function saludo(a, textoNombre) {
    let saludar = a + textoNombre
    return saludar
}

document.write(saludo(a, textoNombre));