const NUM1 =parseInt(prompt('Introduce el primer numero: '));
const NUM2 = parseInt(prompt('Introduce el segundo numero: '));

if(NUM1 > NUM2){
    document.write(`El numero más grande es: ${NUM1}`);
}
else if(NUM2< NUM1){
    document.write(`El numero más grande es: ${NUM2}`);

}
else if(NUM2 === NUM1){
    document.write(`Los dos números tienen el mismo valor.`);
}
else{
    document.write(`Error, no has introducido un numero.`);
}