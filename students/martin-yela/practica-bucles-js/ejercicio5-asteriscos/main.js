let imprimir = '';
for (let i=0; i<5;i++){

    imprimir += '<p>';
    for (let a = 0;a<=i;a++){
        imprimir+= '*';
    }
    imprimir += '</P>';
}
for (let i=4; i>0;i--){

    imprimir += '<p>';
    for (let a = i;a>0;a--){
        imprimir+= '*';
    }
    imprimir += '</P>';
}


document.write(imprimir);