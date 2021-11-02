let filas = parseInt(prompt('Dime cantidad de filas: '));
let columnas = parseInt(prompt('Dime cantidad de columnas: '));

let imprimir = "<p>";
for (let i=0;i<columnas;i++){
    imprimir += '__ ';
}
imprimir += '</p>';

for (let i=0;i<filas;i++){
    imprimir += '<p>';
    for (let j = 0; j<columnas;j++){
        imprimir += `|__`;
        if (j === columnas-1){
            imprimir += '|</p>';
        }
    }
}
document.write(imprimir);

// String.fromCharCode(862)